<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">账单</block>
		</cu-custom>
		<bill-card v-for="(item,index) in billList" :key="index"></bill-card>
	</view>
</template>

<script>
	import BillCard from './card.vue'
	export default {
		components: {
			BillCard
		},
		data() {
			return {
				billList: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
