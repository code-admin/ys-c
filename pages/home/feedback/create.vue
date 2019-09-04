<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">问题反馈</block>
		</cu-custom>
	
		<view class="cu-bar bg-white solid-bottom margin-top-sm">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> 反馈信息
			</view>
		</view>
	
		<form @submit="formSubmit" report-submit report-submit-timeout="10000">
			<view class="cu-form-group ">
				<view class="title text-grey">问题类型</view>
				<picker name="questionType" @change="pickerType" :range="questionTypeList" range-key="questionName">
					<view class="picker">{{questionTypeName}}</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">问题描述</view>
				<input name="questionName" placeholder="请输入问题描述" v-model="question.questionName"></input>
			</view>
			<view class="cu-form-group align-start">
				<view class="title text-grey">具体说明</view>
				<textarea name="remark" class="padding-0" v-model="question.remark" maxlength="-1" auto-height></textarea>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">客户名称</view>
				<input name="customerName" placeholder="请输入客户名称" v-model="question.customerName"></input>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">联系电话</view>
				<input name="phone" placeholder="请输入联系电话" v-model="question.phone"></input>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;求</view>
				<input name="requirement" placeholder="附加要求" v-model="question.requirement"></input>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">订单编号</view>
				<input name="orderId" placeholder="请输入订单编号" v-model="question.orderId"></input>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">机&nbsp;&nbsp;台&nbsp;&nbsp;号</view>
				<input name="deviceNo" placeholder="机台号" v-model="question.deviceNo"></input>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种</view>
				<picker name="productType" class="product-type" @change="pickerProductType" :range="productTypeList" range-key="name">
					<view class="picker">{{productName}}</view>
				</picker>
				<view class="title text-grey">生产日期</view>
				<picker name="productDate" mode="date" @change="pickerDate" v-model="question.productDate">
					<view class="picker">{{question.productDate || '生产日期'}}</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">宽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度</view>
				<input name="width" type="number" placeholder="宽度" v-model="question.width"></input>
				<view class="title text-grey">长&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度</view>
				<input name="length" type="number" placeholder="长度" v-model="question.length"></input>
			</view>
			<view class="cu-form-group">
				<view class="title text-grey">克&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重</view>
				<input name="weight" type="number" placeholder="克重" v-model="question.weight"></input>
				<view class="title text-grey">个&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数</view>
				<input name="number" type="number" placeholder="个数" value="1" v-model="question.number"></input>
			</view>
			<button class="cu-btn margin block shadow bg-gradual-green lg" form-type="submit" :disabled="submitting">提交</button>
		</form>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				submitting: false,
				questionTypeList: [],
				productTypeList: [],
				question: {
					formId: null,
					questionName: "",
					questionType : null,
					productDate: null,
					productType: null,
					remark: "",
					requirement: "",
					customerName: "",
					createBy: "",
					deviceNo: "",
					orderId: 1,
					weight: "",
					width: "",
					number: "",
					length: "",
					questionName: "",
				}
			}
		},
		created() {
			this.queryTypeList();
			this.queryProductTypeList();
		},
		methods: {
			queryTypeList(){
				this.$request.post({
					url: "/feedback/getFeedBackTypes"
				}).then(res =>{
					this.questionTypeList = res.data
				})
			},
			queryProductTypeList(){
				this.$request.post({
					url: "/product/getProductTypes"
				}).then(res =>{
					this.productTypeList = res.data
				})
			},
			formSubmit(e){
				let formId = e.detail.formId;
				console.log("formId: ", formId);
				if(formId === "requestFormId:fail timeout"){
					return uni.showToast({ title: '请求超时，请再次尝试提交' });
				}
				this.question.formId = formId;
				this.submitting = true;
				this.$request.post({
					data: this.question,
					loadingTip: "提交信息中...",
					url: '/feedback/createFeedback',
					fail: () => {
						this.submitting = false;
					},
					success: res => {
						uni.showToast({
							duration: 3000,
							title: res.message,
							complete: () => {
								this.submitting = false;
								setTimeout(()=>uni.navigateTo({ url: "/pages/home/feedback/feedback" }), 2500);
							}
						});
					}
				})
			},
			pickerType(e){
				this.question.questionType = this.questionTypeList[e.detail.value].id;
			},
			pickerDate(e){
				this.question.productDate = e.detail.value;
			},
			pickerProductType(e){
				this.question.productType = this.productTypeList[e.detail.value].id;
			},
			
		},
		computed:{
			questionTypeName(){
				let questionType = this.question.questionType;
				let questionTypeList = this.questionTypeList || [];
				if(questionTypeList.some(type => type.id === questionType)) {
					return questionTypeList.find(type => type.id === questionType).questionName;
				}
				return "请选择类型";
			},
			productName(){
				let productType = this.question.productType;
				let productTypeList = this.productTypeList || [];
				if(productTypeList.some(type => type.id === productType)) {
					return productTypeList.find(type => type.id === productType).name;
				}
				return "选择品种";
			}
		}
	}
</script>

<style lang="scss" scoped>
	textarea{
		padding: 0!important;
		min-height: 70px;
		margin: 26rpx auto;
	}
	picker {
		.picker {
			text-align: left;
		}
		
		&.product-type:after {
			width: 40rpx;
			padding-right: 18px;
		}
	}
</style>
