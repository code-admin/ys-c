<template>
	<view>
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
		<view class="report-calender bg-white text-center fixed text-lg padding-sm text-grey cuIcon-calendar" @tap="openCalender" :style="[{top:(CustomBar+45) + 'px'}]">
			<text class="padding-left-xs">{{queryParams.beginDate}} ~ {{queryParams.endDate}}</text>
		</view>
		<uni-calendar ref="calendar" :range="true" @confirm="confirmDate" />
		<block v-if="TabCur==0">
			<product-card v-for="(data,index) in dataList" :key="index" :reportData="data"></product-card>
		</block>
		<block v-else>
			<month-card v-for="(data,index) in dataList" :key="index" :reportData="data"></month-card>
		</block>
		<view class="text-center text-gray padding-xl" v-if="!isLoading && dataList && dataList.length == 0">暂无数据</view>
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
				TabCur: 1,
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
				title: title + " 月销售报表",
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
		}
	}
</script>

<style lang="scss">
page {
	padding-top: 80px;
}
.report-calender{
	position: fixed;
	width: 100%;
	z-index: 1020;
	box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
}
</style>
