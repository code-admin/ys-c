<template>
	<view>
		<view class="cu-card case">
			<view class="cu-item shadow">
				<view class="flex solid-bottom padding justify-between align-center">
					<view class="text-black text-grey"><text class="cuIcon-form padding-right-xs text-grey"></text>10544</view>
					<view class="text-price text-red text-bold text-lg">1180.80</view>
				</view>
				<view class="padding">
					<view class="flex justify-between">
						<view>
							<view class="flex justify-start align-center">
								<view class="padding-right-xs text-grey">单据类型:</view>
								<view class="padding-right line-blue">上年结余</view>
								<view class="cu-tag light round bg-cyan sm">一级增白</view>
							</view>
						</view>
						<view class="flex align-center">
							<view class="padding-right-xs text-grey">单价(元):</view>
							<view class="text-price text-red text-right">
								12300
							</view>
						</view>
					</view>
					<view class="flex align-center margin-top-xs">
						<view class="text-grey">宽(cm):</view>
						<view class="margin-right-lg text-red"> 30</view>
						<view class="text-grey">长(cm):</view>
						<view class="margin-right-lg text-red"> 79</view>
						<view class="text-grey">克重(g):</view>
						<view class="margin-right-lg text-red"> 65</view>
						<view class="text-grey">条数:</view>
						<view class="text-red">--</view>
					</view>
					<view class="flex align-center margin-top-xs">
						<view class="padding-right-xs text-grey">重量:</view>
						<view class="margin-right-lg text-red"> 96</view>
						<view class="padding-right-xs text-grey">个数:</view>
						<view class="padding-right-xs text-red"> 1</view>
					</view>
					<view class="flex align-center margin-top-xs">
						<view class="padding-right-xs text-grey">要求:</view>
						<view class="padding-right-xs text-red"> --</view>
					</view>
					<view class="flex align-center margin-top-xs">
						<view class="padding-right-xs text-grey">备注:</view>
						<view class="padding-right-xs ">结转金额</view>
					</view>
				</view>

				<view class="flex solid-top padding justify-between align-center">
					<view class="text-cut lighttext-blue"><text class="cuIcon-countdown padding-right-xs text-orange"></text>2017-11-30
						10:13:22</view>
					<!-- <view class="text-cut lighttext-blue text-green">详情</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'OrderCard',
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.order-code {
		line-height: 28upx;
	}
</style>
