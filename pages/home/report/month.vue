<template>
	<view>
		<view class="cu-card case no-card margin-top-sm">
			<view class="cu-item shadow">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-mauve"></text>月份：<view class="text-cut text-xl">{{reportData.reportDate}}</view>
					</view>
					<view>
						<text class="text-bold text-orange text-xl text-price">{{reportData.accountAmount}}</text>
						<text class="text-grey text-xs margin-right margin-left-xs">结余（元）</text>
					</view>
				</view>
				<view class="padding">
					<!-- 结余（元）	购买个数	购买重量（kg）	购买均价（吨/元）	购买总金额（元）	退筒个数	退筒金额（元）	其它款	收款（元）	余款（元） -->
					<view class="month-line">
						
						<view>
							<view class="text-red text-price text-lg">{{reportData.paidAmount }}</view>
							<view class="text-grey text-sm">收款（元）</view>
						</view>
						<view>
							<view class="text-red text-price text-lg">{{reportData.balanceAmount }}</view>
							<view class="text-grey text-sm">余款（元）</view>
						</view>
						<view>
							<view :class="[(reportData.otherAmount <= 0 ? 'text-olive':'text-red'), 'text-price', 'text-lg']">{{reportData.otherAmount }}</view>
							<view class="text-grey text-sm">其它款</view>
						</view>
						
						<view>
							<view class="text-grey text-xs">购买个数</view>
							<view class="text-red">{{reportData.goodsNumber }}</view>
						</view>
						<view>
							<view class="text-grey text-xs">购买重量（kg）</view>
							<view class="text-red">{{reportData.goodsWeight }}</view>
						</view>
						<view>
							<view class="text-grey text-xs ">购买均价（吨/元）</view>
							<view class="text-red">{{reportData.avgPrice }}</view>
						</view>
						<view>
							<view class="text-grey text-xs">购买总金额（元）</view>
							<view class="text-red text-price">{{reportData.totalAmount }}</view>
						</view>
						<view>
							<view class="text-grey text-xs">退筒个数</view>
							<view class="text-red">{{reportData.returnNumber }}</view>
						</view>
						<view>
							<view class="text-grey text-xs">退筒金额（元）</view>
							<view class="text-red text-price">{{reportData.returnAmount }}</view>
						</view>
						
					</view>
					
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ReportCard',
		data() {
			return {

			};
		},
		props: ['reportData']
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
		background-color: #fafafa;
		margin: 2upx 2upx;
		overflow: hidden;
		padding: 6upx 12upx;
		justify-content: space-between;
		&:nth-of-type(1){
			text-align: left;
			min-height: 100upx;
			flex-direction: column;
			justify-content: flex-end;
		}
		&:nth-of-type(2),&:nth-of-type(3){
			flex-basis: 24%;
			text-align: left;
			min-height: 100upx;
			flex-direction: column;
			justify-content: flex-end;
		}
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
