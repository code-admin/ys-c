<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">报表详情</block>
		</cu-custom>
		details....
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

<style>
</style>
