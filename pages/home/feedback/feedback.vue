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
		<navigator class="nav-position cu-btn shadow bg-gradual-orange radius text-sl" url="/pages/home/feedback/create">
			<text class="cuIcon-add"></text>
		</navigator>
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
				tabs: [ '全部', '待反馈', '已反馈' ],
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
				this.queryParams.status = this.TabCur === 0 ? null : this.TabCur;
			},
			getFeedbackList(){
				this.$request.post({
					data: this.queryParams,
					loadingTip: '加载中...',
					url: "/feedback/getFeedBackList"
				}).then(res => {
					this.feedbackList = res.data || [];
				})
			}
		},
		watch: {
			queryParams: {
				deep: true,
				handler: 'getFeedbackList'
			}
		}
	}
</script>

<style lang="scss">
page {
	padding-top: 45px;
}
.nav-position{
	border-radius: 50%;
	width: 100upx;
	height: 100upx;
	position: fixed;
	right: 35upx;
	bottom: 65upx;
	z-index: 10;
}
</style>
