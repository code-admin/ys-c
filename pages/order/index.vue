<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">订单</block>
		</cu-custom>
		
		<scroll-view scroll-x class="bg-white nav text-center fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabs" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabs[index]}}
			</view>
		</scroll-view>
		<navigator class="nav-position cu-btn shadow bg-gradual-blue radius text-sl" url="/pages/order/edit">
			<text class="cuIcon-add"></text>
		</navigator>
		
		<order-card v-for="(item,index) in orderList" :key="index"></order-card>
	</view>
</template>

<script>
	import OrderCard from './card.vue'
	export default {
		components: {
			OrderCard
		},
		data() {
			return {
				TabCur: 0,
				CustomBar: this.CustomBar,
				tabs: [ '全部', '创建', '审核', '出库','确认','完成', ],
				orderList: [{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{}
				]
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			}
		}
	}
</script>

<style>
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
