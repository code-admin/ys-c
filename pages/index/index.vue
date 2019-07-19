<template>
	<view>

		<!-- <cu-custom bgColor="bg-gradual-blue">
			<block slot="content">浙江亚设</block>
		</cu-custom> -->

		<!-- 首页 -->
		<home v-if="PageCur==='home'"></home>

		<!-- 我的 -->
		<user v-if="PageCur==='user'"></user>

		<!-- 底部导航栏 -->
		<!-- <view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view :class="PageCur=='home'?'text-green':'text-gray'">
					<view class="cuIcon-homefill"></view> 首页
				</view>
			</view>

			<view class="action" @click="NavChange" data-cur="user">
				<view :class="PageCur=='user'?'text-green':'text-gray'">
					<view class="cuIcon-myfill"></view>我的
				</view>
			</view>
		</view> -->

	</view>
</template>

<script>
	import Home from '../home/home'
	import User from '../user/index'
	export default {
		components: {
			Home,
			User
		},
		data() {
			return {
				PageCur: 'home'
			};
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	
</style>
