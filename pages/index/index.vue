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
			// this.checkSession();
			this.login();
		},
		methods: {
			// 检查是否过期
			checkSession(){
				wx.checkSession({
				  success () {
				    //session_key 未过期，并且在本生命周期一直有效
					console.log('session_key 未过期，并且在本生命周期一直有效');
				  },
				  fail () {
				    // session_key 已经失效，需要重新执行登录流程
				    this.login() //重新登录
				  }
				})
			},
			login(){
				wx.login({
				  success:res => {
				    if (res.code) {
					  console.log('获取临时的code:',res.code);
					  // 获取通过 code openid & session_key
					  this.code2Session(res.code)
				    } else {
				      console.log('登录失败！' + res.errMsg)
				    }
				  }
				})
			},
			code2Session(code){
				this.$request.get({
					url: `v2/sso/code2Session?code=${code}`,
					loadingTip: '接口请求中...'
					}).then(res => {
					console.log('返回的数据',res);
				})
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	
</style>
