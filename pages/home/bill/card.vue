<template>
	<view>
		<view class="cu-card case no-card margin-top-sm">
			<view class="cu-item shadow">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-mauve"></text>
						<view class="text-cut text-xl">
							{{bill.productName}}{{bill.productWidth}}{{bill.productWeight}}
						</view>
					</view>
					<view>
						<text class="text-grey margin-right text-sm">{{(bill.finishTime).substring(0,11)}}</text>
					</view>
				</view>
				<view class="padding">
					
					<!-- <view class="month-line">
						
						<view style="flex-basis: calc(100% - 8upx);">
							<view class="text-grey">企业账号</view>
							<view class="text-brown">{{bill.companyName || '--' }}</view>
						</view>
						
						<view>
							<view class="text-grey">单价</view>
							<view class="text-red text-price">{{bill.price }}</view>
						</view>
						<view>
							<view class="text-grey">重量</view>
							<view class="text-red">{{bill.totalWeight }}</view>
						</view>
						<view>
							<view class="text-grey">金额</view>
							<view class="text-red text-price">{{bill.totalAmount }}</view>
						</view>
						
						
						<view>
							<view class="text-grey">销售余款</view>
							<view class="text-red text-price">{{bill.salesBalance }}</view>
						</view>
						<view>
							<view class="text-grey">已结款</view>
							<view class="text-red text-price">{{bill.paidAmount }}</view>
						</view>
						<view>
							<view class="text-grey">余款</view>
							<view class="text-red text-price">{{bill.balanceAmount }}</view>
						</view>
						
					</view> -->
					
					<!--<view class="more-information">
						<text :class="['text-center block padding-top-xs text-bold text-xxl', opend ? 'cuIcon-fold':'cuIcon-unfold']" @tap="showDetail"></text>
						
						<view class="other-line text-lg flex flex-wrap justify-start margin-top-xs padding-xs" v-show="opend">
							<view class="flex align-center">
								<view class="text-grey text-sm">产品名称</view>
								<view class="text-sm">{{bill.productName}}（{{bill.productNo}}）</view>
							</view>
							<view class="flex align-center">
								<view class="text-grey text-sm">要求</view>
								<view class="text-sm">{{bill.requirement}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">宽度</view>
								<view class="text-red">{{bill.productWidth}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">克重</view>
								<view class="text-red">{{bill.productWeight}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">长度</view>
								<view class="text-red">{{bill.productLength}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">个数</view>
								<view class="text-red">{{bill.goodsNumber}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">退筒个数</view>
								<view class="text-red">{{bill.returnNumber}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">退筒重量</view>
								<view class="text-red">{{bill.returnWeight}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">退筒金额</view>
								<view class="text-red text-price">{{bill.returnAmount}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">其它款</view>
								<view class="text-red text-price">{{bill.otherAmount}}</view>
							</view>
						</view>
					</view> -->
					
					<view class="more-information">
						<view class="other-line text-lg flex flex-wrap justify-start margin-top-xs padding-xs">
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">长度</view>
								<view class="text-red">{{bill.productLength}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">个数</view>
								<view class="text-red">{{bill.goodsNumber}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">单价</view>
								<view class="text-red text-price">{{bill.price}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">重量</view>
								<view class="text-red">{{bill.returnWeight}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">金额</view>
								<view class="text-red text-price">{{bill.returnAmount}}</view>
							</view>
							<!-- <view class="flex align-center flex-direction">
								<view class="text-grey text-xs">备注</view>
								<view class="text-red text-price">{{bill.otherAmount}}</view>
							</view> -->
						</view>
					</view> 
					
					<view class="more-information">
						<text :class="['text-center block padding-top-xs text-bold text-xxl', opend ? 'cuIcon-fold':'cuIcon-unfold']" @tap="showDetail"></text>
						<view class="other-line text-lg flex flex-wrap justify-start margin-top-xs padding-xs" v-show="opend">
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">退筒个数</view>
								<view class="text-red">{{bill.returnNumber}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">退筒重量</view>
								<view class="text-red">{{bill.returnWeight}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">退筒金额</view>
								<view class="text-red text-price">{{bill.returnAmount}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">其它款</view>
								<view class="text-red text-price">{{bill.otherAmount}}</view>
							</view>
							
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">销售余款</view>
								<view class="text-red">{{bill.salesBalance}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">已结款</view>
								<view class="text-red text-price">{{bill.paidAmount}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">余款</view>
								<view class="text-red text-price">{{bill.balanceAmount}}</view>
							</view>
						</view>
					</view>
					
					
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BilltCard',
		data() {
			return {
				opend: false
			};
		},
		props: ['bill'],
		methods:{
			showDetail: function(){
				this.opend = !this.opend;
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		border-radius: 6upx;
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
.more-information {
	margin: 2upx;
	transition: all .3s;
}
.other-line {
	margin-top: 15upx;
	transition: all .3s;
	border-radius: 16upx;
	background-color: #f0f4ff;
	background-image: linear-gradient(180deg, #fafaff 0%, #ffffff 90%);
	&>view {
		margin: 1upx;
		padding: 4upx;
		flex-basis: calc(20% - 4upx);
		// &:first-of-type, &:nth-of-type(2) {
		// 	flex-basis: 100%;
		// 	min-height: 70upx;
		// 	flex-direction: row;
		// 	&>view:first-of-type {
		// 		text-align: center;
		// 		min-width: calc(20% - 4upx);
		// 	}
		// }
		>view:first-of-type {
			margin-bottom: 4upx;
		}
	}
 }
</style>
