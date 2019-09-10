<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">报表</block>
		</cu-custom>
		<report-card v-for="(data,index) in dataList" :key="index" :reportData="data"></report-card>
		<view class="text-center text-gray padding-xl" v-if="dataList && dataList.length == 0">暂无数据</view>
		<view class="text-center text-gray padding" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	import ReportCard from './card'
	export default {
		components:{
			ReportCard
		},
		data() {
			return {
				queryParams: {
					pageIndex: 1,
					pageSize: 5,
				},
				total:0,
				loadedNumber: 0,
				showLoadMore: false,
				loadMoreText: "加载中...",
				dataList: []
			}
		},
		onLoad() {
			this.initData();
		},
		methods: {
			initData(){
				this.loadedNumber = 0;
				this.dataList = [];
				this.queryParams.pageIndex = 1;
				this.loadMoreText = "加载更多...";
				this.showLoadMore = false;
				this.getDataList();
			},
			getDataList(){
				this.$request.post({
					data: this.queryParams,
					loadingTip: '加载中...',
					url: "/report/getMonthReportList"
				}).then(res => {
					this.total = res.total;
					this.loadedNumber += this.queryParams.pageSize;
					this.dataList = this.dataList.concat(res.data) ;
					uni.stopPullDownRefresh();
				})
			}
		}
	}
</script>

<style>

</style>
