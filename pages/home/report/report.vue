<template>
	<view :style="{paddingTop: (TabCur == 0 ? 80 : 40) + 'px'}">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">报表</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav text-center fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-red cur':''" v-for="(item,index) in tabs" 
			:key="index" @tap="tabSelect" :data-id="index">
				{{tabs[index]}}
			</view>
		</scroll-view>
		<uni-calendar ref="calendar" lunar :range="true" @confirm="confirmDate" />
		<block v-if="TabCur==0">
			<view class="report-calender bg-white text-center fixed text-lg padding-sm text-grey cuIcon-calendar" @tap="openCalender" :style="[{top:(CustomBar+45) + 'px'}]">
				<text class="padding-left-xs">{{queryParams.beginDate}} ~ {{queryParams.endDate}}</text>
			</view>
			<view class="bg-white padding">
				<view class="text-lg flex justify-start margin-top-xs">
					<view class="flex align-center justify-center flex-sub flex-direction main-block">
						<view class="text-grey text-sm">产品种数</view>
						<view class="text-red text-bold text-olive">{{dataList.length}}</view>
					</view>
					<view class="flex align-center justify-center flex-sub flex-direction main-block">
						<view class="text-grey text-sm">总重量</view>
						<view class="text-red text-bold text-cyan">{{totalWeight}}</view>
					</view>
					<view class="flex align-center justify-center flex-sub flex-direction main-block">
						<view class="text-grey text-sm">总计</view>
						<view class="text-red text-bold text-orange text-price">{{totalAmount}}</view>
					</view>
				</view>
				
				<view class="text-lg flex justify-start margin-top-xs other-line padding-xs">
					<view class="flex flex-sub align-center flex-direction">
						<view class="text-red">{{totalGoodsNumber}}</view>
						<view class="text-grey text-xs">总购买个数</view>
					</view>
					<view class="flex flex-sub align-center flex-direction">
						<view class="text-red">{{totalReturnNumber}}</view>
						<view class="text-grey text-xs">总退筒个数</view>
					</view>
					<view class="flex flex-sub align-center flex-direction">
						<view class="text-red text-price">{{totalReturnFee}}</view>
						<view class="text-grey text-xs">总退筒金额</view>
					</view>
					<view class="flex flex-sub align-center flex-direction">
						<view class="text-red text-price">{{totalTotalAmount}}</view>
						<view class="text-grey text-xs">总购买金额</view>
					</view>
				</view>
			</view>
			<product-card v-for="(data,index) in dataList" :key="index" :reportData="data" :d1="queryParams.beginDate" :d2="queryParams.endDate"></product-card>
		</block>
		<block v-else>
			<month-card v-for="(data,index) in dataList" :key="index" :reportData="data"></month-card>
		</block>
		<view class="empty-data" v-if="!isLoading && dataList && dataList.length == 0">暂无数据</view>
		<view class="text-center text-gray padding" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	import MonthCard from './month'
	import ProductCard from './product'
	import uniCalendar from '@/node_modules/uni-calendar/uni-calendar'
	export default {
		components:{
			MonthCard,
			ProductCard,
			uniCalendar
		},
		data() {
			return {
				TabCur: 0,
				CustomBar: this.CustomBar,
				tabs: ['产品报表', '月报表'],
				queryParams: {
					beginDate: '',
					endDate: '',
					pageIndex: 1,
					pageSize: 5,
				},
				total: 0,
				loadedNumber: 0,
				isLoading: false,
				showLoadMore: false,
				loadMoreText: "加载中...",
				dataList: []
			}
		},
		onLoad() {
			let currentDate = new Date();
			let month = currentDate.getMonth() + 1;
			let monthStr = month < 10 ? "0" + month : month;
			let date = currentDate.getDate();
			let dateStr = date < 10 ? "0" + date : date;
			this.queryParams.endDate = [currentDate.getFullYear(), monthStr, dateStr].join("-");
			this.queryParams.beginDate = [currentDate.getFullYear(), monthStr, "01"].join("-");
			console.log(this.queryParams);
			this.initData();
		},
		onUnload() {
			this.total = 0,
			this.dataList = [],
			this.loadMoreText = "加载更多...",
			this.showLoadMore = false;
		},
		onReachBottom() {
			if(this.TabCur == 0) return;
			console.log("onReachBottom", this.loadedNumber);
			if (this.loadedNumber >= this.total) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
			setTimeout(() => {
				this.queryParams.pageIndex ++;
				this.getDataList();
			}, 300);
		},
		onShareAppMessage: function() {
			let firstReport = this.dataList[0];
			let title = firstReport ? firstReport.reportDate : "";
			return {
				title: "产品及月销售报表",
				path: '/pages/home/report/report'
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.initData();
			},
			initData(){
				this.loadedNumber = 0;
				this.dataList = [];
				this.queryParams.pageIndex = 1;
				this.loadMoreText = "加载更多...";
				this.showLoadMore = false;
				this.getDataList();
			},
			getDataList(){
				this.isLoading = true;
				this.$request.post({
					data: this.queryParams,
					loadingTip: '加载中...',
					url: (this.TabCur == 0 ? "/report/getProductReport" : "/report/getMonthReportV2List"),
				}).then(res => {
					this.isLoading = false;
					this.total = res.total;
					this.loadedNumber += this.queryParams.pageSize;
					this.dataList = this.dataList.concat(res.data);
					uni.stopPullDownRefresh();
				})
			},
			openCalender(){
				this.$refs.calendar.open();
			},
			confirmDate(e){
				console.log(e);
				if(e.range.begin && e.range.end){
					this.queryParams.beginDate = e.range.begin;
					this.queryParams.endDate = e.range.end;
					this.initData();
				} else {
					uni.showToast({
						icon: "none",
						title: "请正确选择一个区间日期"
					})
				}
				
			}
		},
		computed:{
			totalAmount(){
				// 总结余：单产品结余：totalAmount - returnAmount
				return this.dataList.length && this.dataList.reduce((total, cur) => total + (cur.totalAmount - cur.returnAmount), 0);
			},
			totalGoodsNumber(){
				// 总购买个数
				return this.dataList.length && this.dataList.reduce((total, cur) => total + cur.goodsNumber, 0);
			},
			totalWeight(){
				// 总重量
				return this.dataList.length && this.dataList.reduce((total, cur) => total + cur.goodsWeight, 0);
			},
			totalPrice(){
				// 总单价
				return this.dataList.length && this.dataList.reduce((total, cur) => total + cur.totalAmount, 0);
			},
			totalTotalAmount(){
				// 总购买金额
				return this.dataList.length && this.dataList.reduce((total, cur) => total + cur.totalAmount, 0);
			},
			totalReturnNumber(){
				// 总退筒个数
				return this.dataList.length && this.dataList.reduce((total, cur) => total + cur.returnNumber, 0);
			},
			totalReturnFee(){
				// 总退筒金额
				return this.dataList.length && this.dataList.reduce((total, cur) => total + cur.returnAmount, 0);
			}
		}
	}
</script>

<style lang="scss">
.report-calender{
	position: fixed;
	width: 100%;
	z-index: 1020;
	box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
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
