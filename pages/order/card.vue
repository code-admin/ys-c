<template>
	<view>
		<navigator url="/pages/order/detail?orderId=2314143212341234" hover-class="navigator-hover">
			<view class="cu-card case">
				<view class="cu-item shadow">
					<view class="flex solid-bottom padding justify-between align-center">
						<view class="text-black text-bold text-grey">wx20171130003151</view>
						<view class="cu-tag light round bg-blue">创建</view>
					</view>
					<view class="padding">
						<view class="flex justify-between">
							<view class="flex justify-start">
								<view class="padding-right-xs text-grey">下单人:</view>
								<view class="text-center text-shadow">章细花</view>
							</view>
							<view class="line-blue">按重量</view>
						</view>

						<view class="">
							<view class="margin-top">
								<view class="flex justify-start align-center">
									<view class="padding-right-xs text-grey">品种:</view>
									<view class="cu-tag light round bg-cyan sm margin-right-xl">增白</view>
									<view class="padding-right-xs text-grey">要求:</view>
									<view class="padding-right-lg text-red">密</view>
								</view>
							</view>
							<view class="flex align-center margin-top-xs">
								<view class="text-grey">宽度(cm):</view>
								<view class="margin-right-lg text-red">50</view>
								<view class="text-grey">克重(g):</view>
								<view class="margin-right-lg text-red">80</view>
								<view class="text-grey">个数:</view>
								<view class="margin-right-lg text-red">8</view>
								<view class="text-grey">单价:</view>
								<view class="text-red"> 9900</view>
							</view>
						</view>
						<view class="solid-dotted margin-top padding-top-xs">
							<view class="margin-top-xs">
								<view class="flex justify-start align-center">
									<view class="padding-right-xs text-grey">品种:</view>
									<view class="cu-tag light round bg-cyan sm margin-right-xl">一级白</view>
									<view class="padding-right-xs text-grey">要求:</view>
									<view class="padding-right-lg text-red">/</view>
								</view>
							</view>
							<view class="flex align-center margin-top-xs">
								<view class="text-grey">宽度(cm):</view>
								<view class="margin-right-lg text-red"> 55</view>
								<view class="text-grey">克重(g):</view>
								<view class="margin-right-lg text-red"> 70</view>
								<view class="text-grey">个数:</view>
								<view class="margin-right-lg text-red"> 9</view>
								<view class="text-grey">单价:</view>
								<view class="text-red"> 9100</view>
							</view>
						</view>
					</view>

					<view class="flex solid-top padding justify-between align-center">
						<view class="text-cut lighttext-blue"><text class="cuIcon-countdown padding-right-xs text-orange"></text>2017-11-30
							10:13:22</view>
						<view class="text-cut lighttext-blue text-green">详情</view>
					</view>
				</view>
			</view>
		</navigator>
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
	.solid-dotted{
		border-top: 1upx dotted rgba(0, 0, 0, 0.1);
	}
</style>
