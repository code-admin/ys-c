<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-red"></text>计算单价
			</view>
		</view>
		<form>
			<view class="cu-form-group">
				<view class="title">品种:</view>
				<picker @change="materialChange" :value="material" :range="materials">
					<view class="picker">
						{{materials[material]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">宽度:</view>
				<input type="digit" placeholder="片布宽(cm)" name="input" v-model="width"></input>
				<view class="title">长度:</view>
				<input type="digit" placeholder="片布长(cm)" name="input" v-model="length"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">克重:</view>
				<input type="digit" placeholder="克重(g)" name="input" v-model="weight"></input>
				<view class="title">单价:</view>
				<input type="digit" placeholder="单价(元)" name="input" v-model="price"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">其他要求:</view>
				<input type="" placeholder="其他(元)" name="input" v-model="other"></input>
				<input type="text" value="" />
			</view>
			<view class="cu-form-group">
				<view class="title">外袋价格:</view>
				<view class="text-red">{{computePrice}}</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		name: "compute1",
		data() {
			return {
				material:0,
				materials: ['增白','半透','一级白','其他'],
				length: null,
				width: null,
				weight: null,
				price: 8500,
				other: null,
				// computePrice:null,
			}
		},
		computed: {
			computePrice() {
				if (this.length && this.width && this.weight && this.price) {
					if (this.other) {
						return (
							`${(this.length / 100 * this.width / 100 * 2 * this.weight / 1000 * (parseFloat(this.price) + parseFloat(this.other))/ 1000).toFixed(4)} ¥`
						)
					}
					return `${(this.length / 100 * this.width / 100 * 2 * this.weight / 1000 * this.price / 1000).toFixed(4)} ¥`
				} else {
					return ''
				}

			}
		},
		methods: {
			materialChange(){
				console.log();
			}
		}
	}
</script>

<style>

</style>
