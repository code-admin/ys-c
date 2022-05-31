<template>
	<view class="cu-card case bg-yellow light">
		<view class="cu-item shadow">
			<view class="flex solid-bottom justify-between align-center padding-xs">
				<view class="text-progress">
					<text class="cuIcon-deliver_fill padding-right-xs">{{delivery.deliverNumber}}</text>
					<view v-if="order.deliverStatus" class="cu-tag">
						{{delivery.deliverNumber}}
					</view>
				</view>
				<view class="text-sm cu-tag light round bg-gradual-orange shadow">查看详情 </view>
			</view>

			<view class="flex justify-start padding-xs" v-for="orderExt in order.orderExts" :key="orderExt.id">
				<text class="cuIcon-cuIcon text-shadow padding-right-xs text-orange"></text>
				<view class="text-sm">{{orderExt.productDescription}}</view>
				<view class="text-sm text-center text-grey margin-left">
					{{orderExt.goodsNumber ? `x${orderExt.goodsNumber}`: ''}}
				</view>
			</view>

			<view class="text-gray padding-xs text-sm">
				<text class="cuIcon-peoplefill padding-right-xs">{{delivery.deliverUserName}}</text>
				<text class="cuIcon-mobilefill padding-right-xs">{{delivery.deliverUserPhone}}</text>
			</view>
			<view class="flex justify-between align-center padding-xs text-sm">
				<view class="text-cut lighttext-blue">
					<text class="cuIcon-locationfill text-shadow padding-right-xs">asdfasdf</text>
				</view>
				<!-- <button class="cu-btn bg-orange  sm shadow">查看</button> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'DeliveryItem',
		props: {
			delivery: Object,
		},
		mounted() {
			console.log('deliverydeliverydeliverydelivery', delivery);
		},
		methods: {

		}
	}
</script>

<style>

</style>
