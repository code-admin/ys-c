<template>
	<view>
		<cu-custom bgColor="bg-gradual-red" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">反馈</block>
		</cu-custom>

		<scroll-view scroll-x class="bg-white nav text-center fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-red cur':''" v-for="(item,index) in tabs" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabs[index]}}
			</view>
		</scroll-view>

		<feedback-card v-for="(item,index) in feedbackList" :key="index" :card="item"></feedback-card>
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
				feedbackList: [{}, {}, {}, {}]
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
					url: "/feedback/getFeedBackList"
				}).then(res => {
					let feedbackList = res.data || [];
					this.feedbackList = feedbackList.map(feed => {
						if(feed.productDate != null) {
							feed.productDate = feed.productDate.substr(0,10);
						}
						return feed;
					});
				})
			}
		}
	}
</script>

<style>
page {
		padding-top: 45px;
}
</style>
