<template>
	<view>
		<view class="cu-card case no-card margin-top-sm">
			<view class="cu-item shadow">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-mauve"></text>月份：<view class="text-cut text-bold text-xl">{{reportData.reportDate}}</view>
					</view>
				</view>
				<view class="padding">
					<view class="text-lg flex justify-start margin-top-xs">
						<view class="flex align-center justify-center flex-sub flex-direction main-block">
							<view class="text-grey text-sm">总金额</view>
							<view class="text-red text-bold text-price totalAmount">{{reportData.totalAmount || '--' }}</view>
						</view>
						<view class="flex align-center justify-center flex-sub flex-direction main-block">
							<view class="text-grey text-sm">总收款</view>
							<view class="text-red text-bold text-price">{{reportData.totalFee || '--' }}</view>
						</view>
					</view>
					
					<view class="text-lg flex justify-start">
						<view class="flex align-center justify-center flex-sub flex-direction main-block">
							<view class="text-grey text-sm">总重量</view>
							<view class="text-red text-bold totalWeight">{{reportData.totalWeight || '--' }}</view>
						</view>
						<view class="flex align-center justify-center flex-sub flex-direction main-block">
							<view class="text-grey text-sm">总单价</view>
							<view class="text-red text-bold text-price totalPrice">{{reportData.totalPrice || '--'}}</view>
						</view>
					</view>
					
					
					<view class="text-lg flex justify-start margin-top-xs other-line padding-xs">
						<view class="flex flex-sub align-center flex-direction">
							<view class="text-red text-bold text-price">{{reportData.totalOtherFee || '--' }}</view>
							<view class="text-grey text-xs">总其它费用</view>
						</view>
						<view class="flex flex-sub align-center flex-direction">
							<view class="text-red text-bold">{{reportData.totalReturnWeight || '--' }}</view>
							<view class="text-grey text-xs">总退筒重量</view>
						</view>
						<view class="flex flex-sub align-center flex-direction">
							<view class="text-red text-bold text-price">{{reportData.totalReturnFee || '--' }}</view>
							<view class="text-grey text-xs">总退筒金额</view>
						</view>
					</view>
					
					
					<view class="cu-list grid col-4">
						<view class="cu-item">
							<text class="title">产品</text>
						</view>
						<view class="cu-item">
							<text class="title">重量（千克）</text>
						</view>
						<view class="cu-item">
							<text class="title">单价（元 / 吨）</text>
						</view>
						<view class="cu-item">
							<text class="title">金额（元）</text>
						</view>
						
						<view class="cu-item">
							<text class="title">增白</text>
						</view>
						<view class="cu-item">
							<text>{{reportData.zbWeight || '--' }}</text>
						</view>
						<view class="cu-item">
							<text>{{reportData.zbPrice || '--' }}</text>
						</view>
						<view class="cu-item">
							<text>{{reportData.zbAmount || '--' }}</text>
						</view>
						
						<view class="cu-item">
							<text class="title">一级白</text>
						</view>
						<view class="cu-item">
							<text>{{reportData.yjzbWeight || '--' }}</text>
						</view>
						<view class="cu-item">
							<text>{{reportData.yjzbPrice || '--' }}</text>
						</view>
						<view class="cu-item">
							<text>{{reportData.yjzbAmount || '--' }}</text>
						</view>
						
						<view class="cu-item">
							<text class="title">半透</text>
						</view>
						<view class="cu-item">
							<text>{{reportData.btWeight || '--' }}</text>
						</view>
						<view class="cu-item">
							<text>{{reportData.btPrice || '--' }}</text>
						</view>
						<view class="cu-item">
							<text>{{reportData.btAmount || '--' }}</text>
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
.main-block {
	margin: 4upx;
	padding: 8upx 0;
	min-height: 100upx;
	border-radius: 10upx;
	border-bottom: 2upx solid #fad0d1;
	.text-bold {
		font-size: 55upx;
	}
	.totalAmount{
		color: #1dd98d;
	}
	.totalWeight{
		color: #ff9600
	}
	.totalPrice{
		color: pink;
	}
}
 .other-line {
	 margin-bottom: 15upx;
	 border-radius: 12upx;
	 background-color: #f1f7fe;
 }
 .cu-list.grid>.cu-item{
	padding: 4rpx 0;
	width: calc((100% - 120rpx) / 3);
	&:nth-of-type(1),&:nth-of-type(5),&:nth-of-type(9),&:nth-of-type(13){
		width: 120rpx;
		text-align: right;
		padding-right: 20rpx;
	}
	.title{
		color: #8799a3;
	}
 }
</style>
