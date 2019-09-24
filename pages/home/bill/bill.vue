<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">账单</block>
		</cu-custom>
		<uni-calendar ref="calendar" lunar :range="true" @confirm="confirmDate" />
		<view class="report-calender bg-white text-center fixed text-lg padding-sm text-grey cuIcon-calendar" @tap="openCalender" :style="[{top:(CustomBar) + 'px'}]">
			<text class="padding-left-xs">{{filter.startTime}} ~ {{filter.endTime}}</text>
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
			openCalender(){
				this.$refs.calendar.open();
			},
			confirmDate(e){
				console.log(e);
				if(e.range.begin && e.range.end){
					this.filter.startTime = e.range.begin;
					this.filter.endTime = e.range.end;
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

<style>

</style>
