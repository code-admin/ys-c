<template>
	<view>
		<view class="page bg-white">
			<cu-custom bgImage="https://image.weilanwl.com/color2.0/index.jpg" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">登录</block>
			</cu-custom>

			<view class="h200 margin-xl flex justify-center logo">
				<image src="http://6776615.s21i.faiusr.com/4/ABUIABAEGAAgqMGPxQUozqiK3gUwsQ84rQ8.png" class="png" mode="widthFix"></image>
			</view>

			<view class="login">
				<view class="margin padding-sm solid line-green round flex justify-start align-center">
					<text class="lg text-grey cuIcon-people padding-right margin-right solid-right"></text>
					<input type="text" placeholder="请输入用户名" maxlength="30" />
				</view>
				<view class="margin padding-sm solid line-green round flex justify-start align-center">
					<text class="lg text-grey cuIcon-lock padding-right margin-right solid-right"></text>
					<input type="password" placeholder="请输入密码" maxlength="30" />
				</view>

				<view class="margin-sm padding-sm">
					<button class="cu-btn block bg-gradual-green margin-tb-sm lg round">
						<!-- <text class="cuIcon-loading2 cuIconfont-spin"></text> --> 登录
					</button>
				</view>

				<view class="margin flex justify-end">
					<view class="text-grey solid-right text-lg margin-right">
						忘记密码 ？
					</view>
					<view class="text-green text-lg ">
						注册账号
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

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
