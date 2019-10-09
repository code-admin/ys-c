<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">报表详情</block>
		</cu-custom>
		
		<view class="de-content margin-bottom-xl">
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-orange"></text> {{itemdata.productName || "产品信息" }}
				</view>
				<view class="margin-right text-sm text-gray">
					{{beginDate}} ~ {{endDate}}
				</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;求：</view>
				<view class="padding-sm">{{itemdata.requirement || ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">宽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度：</view>
				<view class="padding-sm">{{itemdata.productWidth|| ''}} (cm)</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">克&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重：</view>
				<view class="padding-sm">{{itemdata.productWeight || ''}} (g)</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">长&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度：</view>
				<view class="padding-sm">{{itemdata.productLength|| ''}} (cm)</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">个&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数：</view>
				<view class="padding-sm">{{itemdata.goodsNumber || ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">退筒个数：</view>
				<view class="padding-sm">{{itemdata.returnNumber|| ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">退筒重量：</view>
				<view class="padding-sm">{{itemdata.weight|| ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">退筒金额：</view>
				<view class="padding-sm">{{itemdata.returnAmount|| ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">其&nbsp;它&nbsp;&nbsp;款：</view>
				<view class="padding-sm">{{itemdata.otherAmount|| ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">重&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</view>
				<view class="padding-sm">{{itemdata.totalWeight|| ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</view>
				<view class="padding-sm">{{itemdata.price|| ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额：</view>
				<view class="padding-sm">{{itemdata.totalAmount|| ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">已&nbsp;结&nbsp;&nbsp;款：</view>
				<view class="padding-sm">{{itemdata.paidAmount|| ''}}</view>
			</view>
			<view class="cu-item flex">
				<view class="title text-grey padding-sm">余&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;款：</view>
				<view class="padding-sm">{{itemdata.balanceAmount|| ''}}</view>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	data(){
		return {
			itemdata: {},
			productNo: null,
			beginDate: null,
			endDate: null
		}
	},
	onLoad(options) {
		this.productNo = options.productNo;
		this.beginDate = options.d1;
		this.endDate = options.d2;
		this.queryOrderReport();
	},
	methods: {
		queryOrderReport(){
			this.$request.post({
				url: "/report/getOrderReport",
				data: {
					productNo: this.productNo,
					startTime: this.beginDate,
					endTime: this.endDate
				}
			}).then(res =>{
				this.itemdata = res.data
			});
		}
	}
}
</script>

<style lang="scss" scoped>
	.de-content{
		background-color: white;
	}
	.cu-item {
		.text-grey {
			display: flex;
			/** flex-basis: 65px; */
			white-space: nowrap;
			justify-content: space-between;
			&+.padding-right-xl,&+.padding-right-xs{
				min-width: 75px;
			}
		}
	}

</style>

