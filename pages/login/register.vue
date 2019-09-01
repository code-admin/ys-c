<template>
	<view>
		<view class="page bg-white">
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/index.jpg" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">注册&绑定</block>
			</cu-custom>

			<view class="h200 margin-xl flex justify-center logo">
				<image src="http://6776615.s21i.faiusr.com/4/ABUIABAEGAAgqMGPxQUozqiK3gUwsQ84rQ8.png" class="png" mode="widthFix"></image>
			</view>

			<view class="login">
				<view class="margin padding-sm solid line-green round flex justify-start align-center">
					<text class="lg text-grey cuIcon-mobile padding-right margin-right solid-right"></text>
					<input type="text" placeholder="请输入手机号码" maxlength="30" v-model="user.phone" />
					<button class="cu-btn bg-green">验 证 码</button>
				</view>
				<view class="margin padding-sm solid line-green round flex justify-start align-center">
					<text class="lg text-grey cuIcon-lock padding-right margin-right solid-right"></text>
					<input type="password" placeholder="请输入验证码" maxlength="30" v-model="user.smsCode" />
				</view>

				<view class="margin-sm padding-sm">
					<button :disabled="loding" class="cu-btn block bg-gradual-green margin-tb-sm lg round" @click="doLogin">
						<text v-if="loding" class="cuIcon-loading2 cuIconfont-spin"></text>注 册
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btt:'验 证 码',
				checkCode:true,
				user: {
					openId:uni.getStorageSync('openId'),
					phone:null,
					smsCode:null,
				},
				loding: false
			}
		},
		mounted(){
			
		},
		methods: {
			doLogin() {
				this.loding = !this.loding
				this.$request.post({
					url:'/login/bindUser',
					data:this.user
				}).then(res => {
					console.log(res);
					this.loding = !this.loding
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		height: 100vh;

		.h200 {
			height: 200upx;
		}

		.logo {
			image {
				width: 200upx;
				height: 200upx;
			}
		}
	}
</style>
