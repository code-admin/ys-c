<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">编辑订单</block>
		</cu-custom>
		
		<form report-submit>
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text> 基本信息
				</view>
			</view>
			<view class="cu-form-group ">
				<view class="title text-grey">下单人</view>
				<input name="orderUser" type="text" disabled v-model="orderInfo.userName"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title text-grey">订单类型</view>
				<picker name="orderType" placeholder="请输选择订单类型" @change="changeOrderType" :range="orderTypeList" range-key="name">
					<view class="picker">{{orderTypeName}}</view>
				</picker>
			</view>
			
			
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text> 产品信息
				</view>
			</view>
			
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text> 收货信息
				</view>
			</view>
			<view class="cu-form-group ">
				<view class="title text-grey">收货方式</view>
				<input name="deliveryName" type="text" placeholder="请输入收货方式"  v-model="orderInfo.deliveryName"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title text-grey">收货地址</view>
				<input name="address" type="text" placeholder="请输入收货地址" v-model="orderInfo.address"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title text-grey">收货人</view>
				<input name="customerName" type="text" placeholder="请输入收货人" v-model="orderInfo.customerName"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title text-grey">收货人电话</view>
				<input name="phone" type="number" placeholder="请输入收货人电话" v-model="orderInfo.phone"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title text-grey">备注</view>
				<textarea name="remark" class="padding-0" v-model="orderInfo.remark" :rows="2" placeholder="请输入备注" maxlength="-1" auto-height></textarea>
			</view>
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			const user = uni.getStorageSync("user")
			return {
				orderInfo:{
					userName: user.userName,
					orderUser: user.loginName,
					orderType:2,
				},
				orderTypeName:'按重量',
				orderTypeList:[
					{id:1, name:'按条数'},
					{id:2, name:'按重量'}
				]
			}
		},
		methods: {
			// 选择问题类型
			changeOrderType(e){
				this.orderInfo.orderType = this.orderTypeList[e.detail.value].id
				this.orderTypeName = this.orderTypeList[e.detail.value].name
			}
		}
	}
</script>

<style>

</style>
