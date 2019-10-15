<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">报表详情</block>
		</cu-custom>
		
		<view class="de-content margin-bottom-xl">
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> {{itemdata[0].productName || "产品详情" }}
					<text class="text-grey text-sm">（{{queryParams.productNo}}）</text>
				</view>
				<view class="margin-right text-sm text-gray">
					{{queryParams.startTime}} ~ {{queryParams.endTime}}
				</view>
			</view>
			
			<view class="cu-card case no-card margin-top-sm" v-for="(item, index) in itemdata" :key="index">
				<view class="cu-item shadow">
					<view class="padding solid-bottom">
						
						<view class="month-line">
							
							<view style="flex-basis: 100%;">
								<view class="text-grey text-df">要求</view>
								<view class="text-mauve text-df">{{item.requirement }}</view>
							</view>
							<view>
								<view class="text-grey text-sm">宽度（cm）</view>
								<view class="text-red">{{item.productWidth }}</view>
							</view>
							<view>
								<view class="text-grey text-sm">克重（g）</view>
								<view class="text-red">{{item.productWeight }}</view>
							</view>
							<view>
								<view class="text-grey text-sm">个数</view>
								<view class="text-red">{{item.goodsNumber }}</view>
							</view>
							<view class="cu-item flex">
								<view class="text-grey text-sm">重量（kg）</view>
								<view class="text-red">{{item.totalWeight}}</view>
							</view>
							<view>
								<view class="text-grey text-sm">退筒个数</view>
								<view class="text-red">{{item.returnNumber }}</view>
							</view>
							<view>
								<view class="text-grey text-sm">退筒重量</view>
								<view class="text-red">{{item.returnWeight }}</view>
							</view>
							<view>
								<view class="text-grey text-sm">退筒金额</view>
								<view class="text-red text-price">{{item.returnAmount }}</view>
							</view>
							<view>
								<view class="text-grey text-sm">其它款</view>
								<view class="text-red text-price">{{item.otherAmount }}</view>
							</view>
							
							<view class="cu-item flex">
								<view class="title text-grey text-sm">单价</view>
								<view class="text-red text-price">{{item.price }}</view>
							</view>
							<view class="cu-item flex">
								<view class="title text-grey text-sm">金额</view>
								<view class="text-red text-price">{{item.totalAmount}}</view>
							</view>
							<view class="cu-item flex">
								<view class="title text-grey text-sm">已结款</view>
								<view class="text-red text-price">{{item.paidAmount}}</view>
							</view>
							<view class="cu-item flex">
								<view class="title text-grey text-sm">余款</view>
								<view class="text-red text-price">{{item.balanceAmount}}</view>
							</view>
							
						</view>
						
					</view>
				</view>
				
			</view>
			
		</view>
		
		<view class="empty-data" v-if="!isLoading && itemdata && itemdata.length == 0">暂无数据</view>
		<view class="text-center text-gray padding" v-if="showLoadMore">{{loadMoreText}}</view>
		
	</view>
</template>

<script>
export default {
	data(){
		return {
			itemdata: [],
			total: 0,
			loadedNumber: 0,
			isLoading: false,
			showLoadMore: false,
			loadMoreText: "加载中...",
			queryParams: {
				startTime: null,
				endTime: null,
				productNo: null,
				pageIndex: 1,
				pageSize: 5
			}
		}
	},
	onLoad(options) {
		console.log(options)
		this.queryParams.productNo = options.productNo;
		this.queryParams.startTime = options.d1;
		this.queryParams.endTime = options.d2;
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
			this.queryOrderReport();
		}, 300);
	},
	methods: {
		initData() {
			this.itemdata = [];
			this.loadedNumber = 0;
			this.queryParams.pageIndex = 1;
			this.loadMoreText = "加载更多...";
			this.showLoadMore = false;
			this.queryOrderReport();
		},
		queryOrderReport() {
			this.$request.post({
				url: "/report/getOrderReport",
				data: this.queryParams
			}).then(res => {
				this.isLoading = false;
				this.total = res.total;
				this.loadedNumber += this.queryParams.pageSize;
				this.itemdata = this.itemdata.concat(res.data);
				uni.stopPullDownRefresh();
			});
		}
	}
}
</script>

<style lang="scss" scoped>
	.de-content{
		background-color: white;
	}
	.cu-item {
		.text-grey {
			display: flex;
			/** flex-basis: 65px; */
			white-space: nowrap;
			justify-content: space-between;
			&+.padding-right-xl,&+.padding-right-xs{
				min-width: 75px;
			}
		}
	}
	.month-line{
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		&>view {
			display: flex;
			flex-basis: 49%;
			align-items: space-around;
			background-color: #fafaff;
			margin: 2upx 2upx;
			overflow: hidden;
			padding: 6upx 12upx;
			justify-content: space-between;
			&>view{
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				align-content: space-around;
				align-items: space-around;
				&:last-of-type {
					padding-right: 5upx;
				}
			}
		}
	}
</style>

