<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">产品</block>
		</cu-custom>
		
		<scroll-view scroll-x class="bg-white nav fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-bar bg-white search">
				<view class="search-form radius">
					<text class="cuIcon-search"></text>
					<input v-model="filter.keywords" @blur="initData" :adjust-position="false" type="text" placeholder="产品编号、名称、要求、宽度、克重"
					 confirm-type="search"></input>
				</view>
				<view class="action" >
					<view class="margin-tb-sm text-center">
						<button class="cu-btn round bg-cyan shadow" @click="initData">搜索</button>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="uni-padding-wrap uni-common-mt">
			<goods v-for="(goods,index) in data" :key="index" :option="goods"></goods>
			<view class="text-center padding" v-if="showLoadMore">{{loadMoreText}}</view>
		</view>
	</view>
</template>

<script>
	import Goods from './goods'
	export default {
		components: {
			Goods
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				filter:{
					keywords:null,
					status:1,
					pageIndex:1,
					pageSize:5
				},
				goodsList:[],
				total:0,
				data: [],
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 0
			}
		},
		onLoad() {
			this.initData();
		},
		onUnload() {
			this.max = 0,
			this.data = [],
			this.loadMoreText = "加载更多",
			this.showLoadMore = false;
		},
		onReachBottom() {
			console.log("onReachBottom",this.max);
			if (this.max > this.total) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
			setTimeout(() => {
				this.filter.pageIndex ++;
				this.setDate();
			}, 300);
		},
		methods: {
			initData(){
				this.data = []
				this.filter.pageIndex = 1;
				this.loadMoreText = "加载更多";
				this.showLoadMore = false;
				this.$request.post({
					url:'/product/getProductList',
					loadingTip: '正在加载数据...',
					data:this.filter
				}).then(res => {
					this.total = res.total;
					this.max = 0;
					this.data = [];
					let data = [];
					this.max += this.filter.pageSize;
					res.data.map(i => {
						data.push(i)
					})
					this.data = this.data.concat(data);
					uni.stopPullDownRefresh();
				})
			},
			setDate() {
				this.$request.post({
					url:'/product/getProductList',
					data:this.filter
				}).then(res => {
					this.total = res.total;
					let data = [];
					this.max += this.filter.pageSize;
					res.data.map(i => {
						data.push(i)
					})
					this.data = this.data.concat(data);
				})
			}
		}
	}
</script>

<style>
	page {
		padding-top: 45px;
	}
</style>
