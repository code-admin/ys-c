<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">订单</block>
		</cu-custom>
		
		<scroll-view scroll-x class="bg-white nav text-center fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabs" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabs[index]}}
			</view>
		</scroll-view>
		<navigator class="nav-position cu-btn shadow bg-gradual-blue radius text-sl" url="/pages/order/edit/edit">
			<text class="cuIcon-add"></text>
		</navigator>
		
		<order-card v-for="(item,index) in orderList" :key="index" :card="item"></order-card>
		<view class="text-center text-gray padding-xl" v-if="!isLoading && orderList.length == 0">暂无数据</view>
		<view class="text-center text-gray padding" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	import OrderCard from './card.vue'
	export default {
		components: {
			OrderCard
		},
		data() {
			return {
				TabCur: 0,
				CustomBar: this.CustomBar,
				tabs: [ '全部', '创建', '审核', '出库','签收','确认','完成'],
				queryParams: {
					pageIndex: 1,
					pageSize: 5,
					status: null,
				},
				total: 0,
				isLoading: false,
				loadedNumber: 0,
				showLoadMore: false,
				loadMoreText: "加载中...",
				orderList: []
			}
		},
		created() {
			this.initData();
		},
		onUnload() {
			this.total = 0,
			this.orderList = [],
			this.loadMoreText = "加载更多...",
			this.showLoadMore = false;
		},
		onPullDownRefresh() {
			this.initData();
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
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.queryParams.status = this.TabCur === 0 ? null : this.TabCur - 1;
				this.initData();
			},
			initData(){
				this.loadedNumber = 0;
				this.orderList = [];
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
					url: "/order/getOrderList"
				}).then(res => {
					this.isLoading = false;
					this.total = res.total;
					this.loadedNumber += this.queryParams.pageSize;
					this.orderList = this.orderList.concat(res.data);
					uni.stopPullDownRefresh();
				})
			}
		}
	}
</script>

<style>
	page {
		padding-top: 45px;
	}
	.nav-position{
		border-radius: 50%;
		width: 100upx;
		height: 100upx;
		position: fixed;
		right: 35upx;
		bottom: 65upx;
		z-index: 10;
	}
</style>
