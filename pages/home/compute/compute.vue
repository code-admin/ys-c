<template>
	<view>
		<cu-custom bgColor="bg-gradual-red" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">计算</block>
		</cu-custom>
		
		<compute1></compute1>
		
	</view>
</template>

<script>
	import compute1 from './compute1';
	export default {
		components:{
			compute1
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
