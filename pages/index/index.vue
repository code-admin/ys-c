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
		mounted(){
			this.login();
		},
		methods: {
			// 获取通过 code openid & session_key
			login(){
				wx.login({
				  success:res => {
				    if (res.code) {
					  console.log('获取临时的code:',res.code);
					  this.code2Session(res.code)
				    } else {
				      console.log('登录失败！' + res.errMsg)
				    }
				  }
				})
			},
			// 通过code 获取 openId & sessionKey
			code2Session(code){
				this.$request.get({
					url: `v2/sso/code2Session?code=${code}`,
					loadingTip: '接口请求中...'
					}).then(res => {
					// 设置本地缓存
					uni.setStorageSync('openId', res.data.openId);
					uni.setStorageSync('sessionKey', res.data.sessionKey);
					uni.setStorageSync('registerFlag', res.data.registerFlag);
					uni.setStorageSync('user',res.data.user);
				})
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
		}
	}
</script>

<style>
	
</style>
