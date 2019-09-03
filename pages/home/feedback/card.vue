<template>
	<view>
		<navigator url="/pages/home/feedback/detail?feedbackId=iw2389276172s3l23231a" hover-class="navigator-hover">
			<view class="cu-card case">
				<view class="cu-item shadow">
					<view class="flex solid-bottom padding justify-between align-center">
						<view class="text-cut text-black text-bold text-grey">{{card.questionName}}</view>
						<view class="cu-tag light bg-orange">质量问题</view>
					</view>
					<view class="padding">

						<view class="flex justify-between">
							<view>
								<view class="flex justify-start align-center">
									<view class="padding-right-xs text-grey">客户名称:</view>
									<view class="padding-right-xl">{{card.customerName}}</view>
									<view class=""><text class="cuIcon-dianhua padding-right-xs text-orange"></text>{{card.createBy}}</view>
								</view>
							</view>
							<view>
							</view>
						</view>


						<view class="flex align-center margin-top-xs">
							<view class="padding-right-xs text-grey">机台号:</view>
							<view class="padding-right-xl text-red">{{card.deviceNo}}</view>
							<view class="padding-right-xs text-grey">生产日期:</view>
							<view class="padding-right-xl">{{card.productDate}}</view>
							<view class="cu-tag light round bg-blue sm">一级增白</view>
						</view>

						<view class="flex align-center margin-top-xs">
							<view class="padding-right-xs text-grey">宽度:</view>
							<view class="padding-right-xl text-red">{{card.width}}</view>
							<view class="padding-right-xs text-grey">克重:</view>
							<view class="padding-right-xs text-red">{{card.weight}}</view>
						</view>
						<view class="flex align-center margin-top-xs">
							<view class="padding-right-xs text-grey">备注:</view>
							<view class="text-cut max-width550">{{card.remark}}</view>
						</view>
					</view>
					<view class="flex solid-top padding justify-between align-center">
						<view class="text-cut lighttext-blue">
							<text class="cuIcon-countdown padding-right-xs text-orange"></text>
							{{card.createTime}}
						</view>
					</view>
				</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		props: {
			card: Object
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.max-width550 {
		width: 550upx;
	}
	.cu-item {
		.text-grey {
			white-space: nowrap;
		}
	}
</style>
