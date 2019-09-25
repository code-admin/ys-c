<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">账单</block>
		</cu-custom>
		<view class="report-calender bg-white text-center nav fixed text-lg padding-sm text-grey cuIcon-calendar" @tap="openCalender" :style="[{top:(CustomBar) + 'px'}]">
			<text class="padding-left-xs">{{filter.startTime}} ~ {{filter.endTime}}</text>
		</view>
		<uni-calendar ref="calendar" lunar :range="true" @confirm="confirmDate" />
		<view class="bg-white padding solid-top">
			<!-- 销售金额、已结款、余款
				个数、重量、单价、金额、
				退筒个数、退筒重量、退筒金额、其它款、 -->
			<view class="text-lg flex justify-start margin-top-xs">
				<view class="flex align-center justify-center flex-sub flex-direction main-block">
					<view class="text-grey text-sm">销售金额</view>
					<view class="text-red text-bold">{{totalReportData.totalAmount || 0}}</view>
				</view>
				<view class="flex align-center justify-center flex-sub flex-direction main-block">
					<view class="text-grey text-sm">已结款</view>
					<view class="text-red text-bold text-cyan">{{totalReportData.paidAmount || 0}}</view>
				</view>
				<view class="flex align-center justify-center flex-sub flex-direction main-block">
					<view class="text-grey text-sm">余款</view>
					<view class="text-red text-bold text-orange text-price">{{totalReportData.balanceAmount || 0}}</view>
				</view>
			</view>
			
			<view class="text-lg flex justify-start margin-top-xs other-line padding-xs">
				<view class="flex flex-sub align-center flex-direction">
					<view class="text-red text-olive">{{totalReportData.goodsNumber || 0}}</view>
					<view class="text-grey text-xs">个数</view>
				</view>
				<view class="flex flex-sub align-center flex-direction">
					<view class="text-red">{{totalReportData.totalWeight || 0}}</view>
					<view class="text-grey text-xs">重量</view>
				</view>
				<view class="flex flex-sub align-center flex-direction">
					<view class="text-red text-price">{{totalReportData.price || 0}}</view>
					<view class="text-grey text-xs">单价</view>
				</view>
				<view class="flex flex-sub align-center flex-direction">
					<view class="text-red text-price">{{totalReportData.totalAmount || 0}}</view>
					<view class="text-grey text-xs">金额</view>
				</view>
			</view>
			<view class="text-lg flex justify-start margin-top-xs other-line padding-xs">
				<view class="flex flex-sub align-center flex-direction">
					<view class="text-red">{{totalReportData.returnNumber || 0}}</view>
					<view class="text-grey text-xs">退筒个数</view>
				</view>
				<view class="flex flex-sub align-center flex-direction">
					<view class="text-red">{{totalReportData.returnWeight || 0}}</view>
					<view class="text-grey text-xs">退筒重量</view>
				</view>
				<view class="flex flex-sub align-center flex-direction">
					<view class="text-red text-price">{{totalReportData.returnAmount || 0}}</view>
					<view class="text-grey text-xs">退筒金额</view>
				</view>
				<view class="flex flex-sub align-center flex-direction">
					<view class="text-red text-price">{{totalReportData.otherAmount || 0}}</view>
					<view class="text-grey text-xs">其它款</view>
				</view>
			</view>
		</view>
		<bill-card v-for="(bill,index) in dataList" :key="index" :bill="bill"></bill-card>
		<view class="empty-data" v-if="!isLoading && dataList.length == 0">暂无数据</view>
		<view class="text-center padding" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	import BillCard from './card.vue'
	import uniCalendar from '@/node_modules/uni-calendar/uni-calendar'
	export default {
		components: {
			BillCard,
			uniCalendar
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				filter:{
					startTime: '',
					endTime: '',
					pageIndex:1,
					pageSize: 10
				},
				total:0,
				isLoading: false,
				loadedNumber: 0,
				showLoadMore: false,
				loadMoreText: "加载中...",
				dataList: [],
				totalReportData: {}
			}
		},
		onLoad() {
			let currentDate = new Date();
			let month = currentDate.getMonth() + 1;
			let monthStr = month < 10 ? "0" + month : month;
			let date = currentDate.getDate();
			let dateStr = date < 10 ? "0" + date : date;
			this.filter.endTime = [currentDate.getFullYear(), monthStr, dateStr].join("-");
			this.filter.startTime = [currentDate.getFullYear(), monthStr, "01"].join("-");
			console.log(this.filter);
			this.initData();
			this.getTotalReportData();
		},
		onUnload() {
			this.total = 0,
			this.dataList = [],
			this.loadMoreText = "加载更多",
			this.showLoadMore = false;
		},
		onPullDownRefresh() {
			this.initData();
		},
		onReachBottom() {
			console.log("onReachBottom",this.loadedNumber);
			if (this.loadedNumber >= this.total) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
			setTimeout(() => {
				this.filter.pageIndex ++;
				this.getDataList();
			}, 300);
		},
		methods: {
			initData(){
				this.loadedNumber = 0;
				this.dataList = [];
				this.filter.pageIndex = 1;
				this.loadMoreText = "加载更多";
				this.showLoadMore = false;
				this.getDataList();
			},
			getDataList() {
				this.isLoading = true;
				this.$request.post({
					data:this.filter,
					loadingTip: '加载中...',
					url:'/report/getBillReport',
				}).then(res => {
					this.isLoading = false
					this.total = res.total;
					this.loadedNumber += this.filter.pageSize;
					this.dataList = this.dataList.concat(res.data) ;
					uni.stopPullDownRefresh();
				})
			},
			getTotalReportData() {
				this.$request.post({
					data: this.filter,
					url:'/report/getBillTotalReport',
				}).then(res => {
					this.totalReportData = res.data;
				})
			},
			openCalender(){
				this.$refs.calendar.open();
			},
			confirmDate(e){
				console.log(e);
				if(e.range.begin && e.range.end){
					this.filter.startTime = e.range.begin;
					this.filter.endTime = e.range.end;
					this.initData();
					this.getTotalReportData();
				} else {
					uni.showToast({
						icon: "none",
						title: "请正确选择一个区间日期"
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">
page {
	padding-top: 45px;
}
.main-block {
	margin: 4upx;
	padding: 8upx 0;
	min-height: 100upx;
	border-radius: 10upx;
	border-bottom: 2upx solid #fad0d1;
	.text-bold {
		font-size: 55upx;
	}
}
 .other-line {
	 margin-bottom: 15upx;
	 border-radius: 12upx;
	 background-color: #f1f7fe;
 }
</style>
