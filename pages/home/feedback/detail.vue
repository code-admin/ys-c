<template>
	<view>
		<cu-custom bgColor="bg-gradual-red" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">反馈详情</block>
		</cu-custom>

		<form>
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> 反馈信息
				</view>
			</view>
			<view class="cu-form-group ">
				<view class="title text-grey">问题类型</view>
				<view>{{feedback.questionTypeName}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">问题描述</view>
				<view>{{feedback.questionName || ''}}</view>
			</view>
			<view class="cu-form-group align-start">
				<view class="title text-grey">具体说明</view>
				<view>{{feedback.remark || ''}}</view>
			</view>
			
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> 客户信息
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">客户名称</view>
				<view>{{feedback.customerName || ''}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">联系电话</view>
				<view>{{feedback.phone || ''}}</view>
			</view>
			
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> 订单信息
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">订单编号</view>
				<view>{{feedback.orderNo || ''}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">产品名称</view>
				<view>{{productName||''}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;求</view>
				<view>{{feedback.requirement}}</view>
			</view>
			
			<view class="cu-form-group">
				<view class="title text-grey">宽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度</view>
				<view>{{feedback.width|| ''}}(cm)</view>
				<view class="title text-grey">克&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重</view>
				<view>{{feedback.weight}}(g)</view>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">个&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数</view>
				<view>{{feedback.number}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">机&nbsp;&nbsp;台&nbsp;&nbsp;号</view>
				<view>{{feedback.deviceNo}}</view>
				<view class="title text-grey">生产日期</view>
				<view>{{feedback.productDate||''}}</view>
			</view>
		</form>

		<view class="cu-bar bg-white solid-bottom margin-top-sm">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> 回馈信息
			</view>
		</view>
		<form class="margin-bottom-xl">
			<view class="cu-form-group">
				<view class="title">回馈人:</view>
				<input placeholder="请输入回馈人" name="input" value="卓军"></input>
				<view class="title">回馈时间:</view>
				<input placeholder="请输入回馈时间" name="input" value="2019-07-01"></input>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">回馈内容:</view>
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" value="这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的反馈信息"></textarea>
			</view>
		</form>
		<view class="action"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				feedbackId: null,
				feedback: {}
			}
		},
		onLoad(options) {
			this.feedbackId = options.feedbackId;
			this.queryFeedback();
		},
		methods: {
			queryFeedback(){
				this.$request.post({
					url: "/feedback/getFeedbackById/" + this.feedbackId
				}).then(res =>{
					this.feedback = res.data
				});
			},
		}
	}
</script>

<style>

</style>
