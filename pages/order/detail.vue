<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">订单详情</block>
		</cu-custom>

		<view class="bg-white padding-bottom-xs" v-if="orderInfo.status">
			<view class="cu-steps">
				<view class="cu-item" :class="index > orderInfo.status ? '':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num" :data-index="index + 1"></text> {{item}}
				</view>
			</view>
		</view>
		
		<view class="bg-white">
			<view class="cu-bar solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text>{{orderInfo.orderNo || ''}}
				</view>
				<view class="action text-sm text-gray">{{orderInfo.orderTime}}</view>
			</view>
			<view class="solid-bottom flex">
				<view class="title text-grey padding-sm">下单人：</view>
				<view class="padding-sm">{{orderInfo.orderUserName || ''}}</view>
			</view>
			<view class="solid-bottom flex">
				<view class="title text-grey padding-sm">发货方式：</view>
				<view class="padding-sm">{{orderInfo.deliveryName || ''}}</view>
			</view>
			<view class="solid-bottom flex">
				<view class="title text-grey padding-sm">收货人：</view>
				<view class="padding-sm">{{orderInfo.customerName || ''}}</view>
			</view>
			<view class="solid-bottom flex">
				<view class="title text-grey padding-sm">收货人电话：</view>
				<view class="padding-sm">{{orderInfo.phone || ''}}</view>
			</view>
			<view class="solid-bottom flex">
				<view class="title text-grey padding-sm">收货地址：</view>
				<view class="padding-sm">{{orderInfo.address || ''}}</view>
			</view>
		</view>
		
		<view class="">
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text>订单类型: <view class="cu-tag light margin bg-cyan radius padding-sm">{{orderInfo.orderTypeName}}</view>
				</view>
			</view>
			<view v-if="!!orderInfo.orderExts">
				<product-item v-for="(goods,index) in orderInfo.orderExts"  :key="index"  :product="goods" :showDel="false" :orderType="orderInfo.orderType" @remove="removeGoods(index)" ></product-item>
			</view>
		</view>
		
		<view v-if="orderInfo.orderExpressList">
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text>出库记录
				</view>
			</view>
			<express v-for="express in orderInfo.orderExpressList" :key ="express.id" :express="express" :orderType="orderInfo.orderType" :orderId="orderInfo.id"></express>
		</view>
		
		<view class="bg-white">
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text>订单流转记录
				</view>
			</view>
			<view class="">
				<view class="cu-timeline">
					<view :class="{ 'cu-item': true, 'text-blue': index == 0 }" :key="index" v-for="(history, index) in orderInfo.orderHistoryList">
						<view class="content">
							<view class="cu-capsule radius">
								<view :class="['cu-tag', index == 0 ? 'bg-cyan':'bg-grey']">{{history.updateBy}}</view>
								<view :class="['cu-tag', index == 0 ? 'line-cyan':'line-grey']">{{history.updateTime}}</view>
							</view>
							<view class="margin-top">{{history.remark}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import ProductItem from './common/ProductItem'
	import Express from './common/Express'
	export default {
		components:{
			ProductItem,
			Express
		},
		data() {
			return {
				numList: ['创建','待审核', '待出库','待签收','待确认','完成'],
				orderInfo:{}
			}
		},
		onLoad(options) {
			options.orderId && this.getOrderInfoById(options.orderId);
		},
		methods: {
			// 获取订单详情
			getOrderInfoById(orderId){
				this.$request.post({
					url: `/order/getOrderById/${orderId}`,
					loadingTip: '正在加载订单数据...',
				}).then(res => {
					this.orderInfo = res.data;
				}).catch(err =>{
					uni.showToast({
						duration: 3000,
						title: err.message,
						icon: "none",
					})
				})
			}
		}
	}
</script>

<style>

</style>
