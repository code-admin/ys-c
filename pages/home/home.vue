<template>
	<view>
		<scroll-view scroll-y class="page">
			<banner></banner>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-green"></text> 功能分布
				</view>
			</view>
			<view class="cu-card case no-card">
				<view class="cu-item shadow pt30">
					<view class="nav-list">
						<view hover-class="none" class="nav-li" navigateTo :class="'bg-'+item.color" @click="NavChange" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
						 v-for="(item,index) in elements" :key="index" :data-cur="item.page">
							<view class="nav-title">{{item.title}}</view>
							<view class="nav-name">{{item.name}}</view>
							<text :class="'cuIcon-' + item.cuIcon"></text>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-green"></text> 服务帮助
				</view>
			</view>
			<view class="cu-card case no-card">
				<view class="cu-item shadow pt30">
					<view class="nav-list">
						<view hover-class="none" class="nav-li" navigateTo :class="'bg-'+item.color" @click="NavChange" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
						 v-for="(item,index) in elements2" :key="index" :data-cur="item.page">
							<view class="nav-title">{{item.title}}</view>
							<view class="nav-name">{{item.name}}</view>
							<text :class="'cuIcon-' + item.cuIcon"></text>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-green"></text> 个人中心
				</view>
			</view>
			<view class="cu-card case no-card">
				<view class="cu-item shadow pt30">
					<view class="nav-list">
						<view hover-class="none" class="nav-li" navigateTo :class="'bg-'+item.color" @click="NavChange" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]"
						 v-for="(item,index) in elements3" :key="index" :data-cur="item.page">
							<view class="nav-title">{{item.title}}</view>
							<view class="nav-name">{{item.name}}</view>
							<text :class="'cuIcon-' + item.cuIcon"></text>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="cu-tabbar-height"></view> -->
		</scroll-view>
	</view>
</template>

<script>
	import Banner from './banner.vue'
	export default {
		name: "Home",
		components: {
			Banner
		},
		data() {
			return {
				isCard: false,
				elements: [{
						title: '订单',
						name: '订单状态',
						color: 'cyan',
						cuIcon: 'text',
						page: '/pages/order/index'
					},
					{
						title: '产品',
						name: '产品库存',
						color: 'blue',
						cuIcon: 'pic',
						page: '/pages/home/product/product'
					},
					{
						title: '报表',
						name: '销售报表',
						color: 'purple',
						cuIcon: 'rank',
						page: '/pages/home/report/report'
					},
					{
						title: '账单 ',
						name: '销售账单',
						color: 'mauve',
						cuIcon: 'refund',
						page: '/pages/home/bill/bill'
					}
				],
				elements2: [{
						title: '反馈',
						name: '消息反馈',
						color: 'pink',
						cuIcon: 'comment',
						page: '/pages/home/feedback/feedback'
					},
					{
						title: '计算',
						name: '成品加工计算',
						color: 'brown',
						cuIcon: 'edit',
						page: '/pages/home/compute/compute'
					}
				],
				elements3: [{
						title: '我的',
						name: '个人信息',
						color: 'olive',
						cuIcon: 'my',
						page: '/pages/user/info/info'
					},
					{
						title: '帮助',
						name: '联系客服',
						color: 'green',
						cuIcon: 'service',
						page: ''
					}
				]
			}
		},
		methods: {
			NavChange(e) {
				const url = e.currentTarget.dataset.cur
				if (!url) {
					uni.makePhoneCall({
						phoneNumber: '10086' //仅为示例
					});
				} else {
					if(uni.getStorageSync("registerFlag")){
						console.log('正在跳转',url);
						// this.PageCur = url
						uni.navigateTo({url: url})
					}else{
						uni.navigateTo({
							url: '/pages/login/register',
						})
					}
				}
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.cu-bar {
		margin: 10upx 0 0;
	}

	.pt30 {
		padding-top: 30upx;
	}

	.h91 {
		height: 91upx;
	}
</style>
