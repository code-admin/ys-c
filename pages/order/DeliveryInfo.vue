<template>
	<view class="page">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">配送信息</block>
		</cu-custom>

		<map class="bg-map" v-if="showMap" id="delivery_info_map" ref="delivery_info_map" :polyline="polyline"
			:latitude="latitude" :longitude="longitude" :markers="markers" :show-location="false">
		</map>

		<view class="page-body">
			<view class="bg-white">
				<view class="cu-bar solid-bottom margin-top-sm">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>配送信息
					</view>
					<view class="action text-sm text-gray">{{delivery.updateTime}}</view>
				</view>
				<view class="solid-bottom flex">
					<view class="title text-grey padding-sm">单号：</view>
					<view class="padding-sm">{{delivery.deliverNumber}}</view>
				</view>
				<view class="solid-bottom flex">
					<view class="title text-grey padding-sm">配送员：</view>
					<view class="padding-sm">{{delivery.deliverUserName}}</view>
				</view>
				<view class="solid-bottom flex">
					<view class="title text-grey padding-sm">配送员电话：</view>
					<view class="padding-sm">{{delivery.deliverUserPhone}}</view>
				</view>
				<view class="solid-bottom flex">
					<view class="title text-grey padding-sm">当前位置：</view>
					<view class="padding-sm">{{delivery.address}}</view>
				</view>
				<view class="solid-bottom flex">
					<view class="title text-grey padding-sm">距离：</view>
					<view class="padding-sm">{{(delivery.distance)}}</view>
				</view>
				<view class="solid-bottom flex">
					<view class="title text-grey padding-sm">预计最快还需要：</view>
					<view class="padding-sm">{{delivery.duration}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showMap: false,
				latitude: null,
				longitude: null,
				markers: [],
				polyline: [],
				delivery: {}
			}
		},
		onLoad(option) {
			this.delivery = JSON.parse(option.delivery)
			console.log(this.delivery)
			this.markers = uni.getStorageSync('markers')
			this.latitude = this.markers[1].latitude;
			this.longitude = this.markers[1].longitude;
			// 当前司机的位置
			const nowLocation = this.delivery.location.split(',');
			this.markers.push({
				label: {
					content: `您的商品已到达: ${this.delivery.address}`,
					color: '#F40F40'
				},
				latitude: nowLocation[1],
				longitude: nowLocation[0],
				iconPath: 'http://yase.cn-sh2.ufileos.com/truck.png',
				width: 30,
				height: 30
			})

			console.log('正在规划路线中……！')
			this.getDrivingRoute(this.delivery.location, `${this.longitude},${this.latitude}`);
			this.showMap = !this.showMap;
		},
		methods: {
			/**
			 * 获取路线规划
			 * @param {Object} origin
			 * @param {Object} destination
			 */
			getDrivingRoute(origin, destination) {
				let that = this;
				that.$amapwx.getDrivingRoute({
					origin: origin,
					destination: destination,
					success: function(data) {
						var points = [];
						that.delivery.distance = (data.paths[0].distance) / 1000 + '公里'
						var duration = ((data.paths[0].duration) / 3600).toFixed(2).toString()
						duration = duration.split('.');
						that.delivery.duration = duration[0] + '小时' + (parseInt(duration[1]) * 0.6).toFixed() + '分钟送达';
						if (data.paths && data.paths[0] && data.paths[0].steps) {
							var steps = data.paths[0].steps;
							for (var i = 0; i < steps.length; i++) {
								var poLen = steps[i].polyline.split(';');
								for (var j = 0; j < poLen.length; j++) {
									points.push({
										longitude: parseFloat(poLen[j].split(',')[0]),
										latitude: parseFloat(poLen[j].split(',')[1])
									})
								}
							}
						}
						that.polyline = [{
							points: points,
							color: "#0091ff",
							arrowLine: true,
							width: 6
						}]
					},
					fail: function(err) {
						console.log(err)
					}
				})
			},
		}
	}
</script>


<style lang="scss" scoped>
	.page {
		height: 100VH;

		.bg-map {
			position: fixed;
			width: 100VW;
			height: 100VH;
			top: 0;
			left: 0;
		}

		.page-body {
			position: relative;
			top: 50vh;
			overflow-y: scroll;
			z-index: 100000;
		}
	}
</style>
