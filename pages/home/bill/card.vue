<template>
	<view>
		<view class="cu-card case no-card margin-top-sm">
			<view class="cu-item shadow">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-mauve"></text>
						<view class="text-cut text-xl">
							{{`${bill.feeTypeName}(${bill.billNo})`}}
						</view>
					</view>
					<view>
						<text class="text-grey margin-right text-sm">{{bill.collectionTime}}</text>
					</view>
				</view>
				<view class="padding">
					<view class="more-information">
						<view class="other-line text-lg flex flex-wrap justify-start margin-top-xs padding-top-xs">
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">品名</view>
								<view class="text-olive">{{bill.productName ? bill.productName : '--'}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">个数</view>
								<view class="text-red">{{bill.goodsNumber ? bill.goodsNumber : 0}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">单价</view>
								<view class="text-red text-price">{{bill.price ? bill.price : '--'}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">重量</view>
								<view class="text-red">{{bill.netWeight ? bill.netWeight : 0}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">金额</view>
								<view class="text-red text-price">{{bill.amount}}</view>
							</view>
							<view class="flex align-center flex-sub">
								<view class="text-grey text-sm">备注</view>
								<view class="text-grey text-sm">{{bill.remark || '--'}}</view>
							</view>
						</view>
					</view>

					<view class="more-information">
						<text :class="['text-center block text-bold text-xl', opend ? 'cuIcon-fold':'cuIcon-unfold']" @tap="showDetail"></text>
						<view class="other-line details text-lg flex justify-start margin-top-xs padding-xs" v-show="opend">
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">要求</view>
								<view class="text-xs">{{bill.requirement ? bill.requirement : '--'}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">宽度</view>
								<view class="text-xs">{{bill.width ? bill.width : '--'}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">克重</view>
								<view class="text-xs">{{bill.weight ? bill.weight : '--'}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">长度</view>
								<view class="text-xs">{{bill.goodsLength ? bill.goodsLength : '--'}}</view>
							</view>

							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">条数</view>
								<view class="text-xs">{{bill.productNumber ? bill.productNumber : '--'}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">制单</view>
								<view class="text-xs">{{bill.createBy}}</view>
							</view>
							<view class="flex align-center flex-direction">
								<view class="text-grey text-xs">订单号</view>
								<view class="text-xs" v-if="bill.returnNo">
									{{bill.returnNo}}
								</view>
								<view class="text-xs" v-else>
									{{bill.orderNo ? bill.orderNo : '--'}}
								</view>
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
		methods: {
			showDetail: function() {
				this.opend = !this.opend;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.month-line {
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

			&>view {
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
		margin-top: 4upx;
		transition: all .3s;
		border-radius: 16upx;
		background-color: #fafaff;

		// background-image: linear-gradient(180deg, #fafaff 0%, #ffffff 90%);
		&>view {
			margin: 1upx;
			padding: 4upx;
			flex-basis: calc(20% - 4upx);

			&:last-of-type.flex-sub {
				flex-basis: 100%;
				min-height: 65upx;
				flex-direction: row;

				&>view:first-of-type {
					text-align: center;
					min-width: calc(20% - 4upx);
				}
			}

			>view:first-of-type {
				margin-bottom: 4upx;
			}
		}
	}

	.other-line.details>view {
		flex-basis: calc(16% - 4upx);
	}
</style>
