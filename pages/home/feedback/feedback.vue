<template>
	<view>
		<cu-custom bgColor="bg-gradual-red" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">反馈</block>
		</cu-custom>

		<scroll-view scroll-x class="bg-white nav text-center fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-red cur':''" v-for="(item,index) in tabs" 
			:key="index" @tap="tabSelect" :data-id="index">
				{{tabs[index]}}
			</view>
		</scroll-view>

		<feedback-card v-for="(item,index) in feedbackList" :key="index" :card="item"></feedback-card>
		<view class="no-feedback-data margin text-center text-gray" v-if="feedbackList.length == 0">暂无反馈信息</view>
	</view>
</template>

<script>
	import FeedbackCard from './card'
	export default {
		components: {
			FeedbackCard
		},
		data() {
			return {
				TabCur: 0,
				CustomBar: this.CustomBar,
				tabs: [
					'全部',
					'待反馈',
					'已反馈'
				],
				queryParams: {
					pageIndex: 1,
					status: null,
				},
				feedbackList: []
			}
		},
		created() {
			this.getFeedbackList();
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				
			},
			getFeedbackList(){
				this.$request.post({
					data: this.queryParams,
					loadingTip: '正在获取数据...',
					url: "/feedback/getFeedBackList"
				}).then(res => {
					this.feedbackList = res.data || [];
				})
			}
		}
	}
</script>

<style lang="scss">
page {
		padding-top: 45px;
}

</style>
