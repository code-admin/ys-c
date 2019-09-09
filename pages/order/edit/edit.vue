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
				<view class="action">
					<button class="cu-btn round sm bg-blue shadow" @tap="showAddProductModal">添加产品</button>
				</view>
			</view>
			
			<view v-if="!!orderInfo.orderExts">
				<product-item v-for="(goods,index) in orderInfo.orderExts" :key="index" :product="goods" :orderType="orderInfo.orderType"></product-item>
			</view>
			<view class="cu-bar bg-white solid-bottom margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text> 收货信息
				</view>
			</view>
			<view class="cu-form-group ">
				<view class="title text-grey">发货方式</view>
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
				<!-- <view class="title text-grey">备注</view> -->
				<textarea name="remark" class="padding-0" v-model="orderInfo.remark" :rows="2" placeholder="请输入备注" maxlength="-1" auto-height></textarea>
			</view>
			<view class="flex">
				<view class="flex-sub ">
					<button class="cu-btn margin-sm block shadow bg-blue lg" form-type="submit" :disabled="submitting">保存</button>
				</view>
				<view class="flex-sub ">
					<button class="cu-btn margin-sm block shadow bg-blue lg" form-type="submit" :disabled="submitting">保存并提交</button>
				</view>
			</view>
		</form>
		
		<view class="cu-modal bottom-modal" :class="showBottomModal ? 'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-grey" @tap="showBottomModal=!showBottomModal">取消</view>
					<view class="action text-blue" @tap="pushGoods">确定</view>
				</view>
				
				<view class="padding">
					<form>
						<view class="cu-form-group ">
							<view class="title text-grey">产品名称</view>
							<picker name="orderType" placeholder="请输选择订单类型" @change="changeProduct" :range="productList" range-key="name">
								<view class="picker">{{productName}}</view>
							</picker>
						</view>
						<view class="cu-form-group ">
							<view class="title text-grey">要求</view>
							<input name="requirement" type="text" placeholder="请输入要求" v-model="goods.requirement"></input>
						</view>
						<view class="cu-form-group ">
							<view class="title text-grey">宽度</view>
							<input name="width" type="number" placeholder="宽度(cm)" v-model="goods.width"></input>
							<view class="title text-grey">克重</view>
							<input name="weight" type="number" placeholder="克重(g)" v-model="goods.weight"></input>
						</view>
						
						<view v-if="orderInfo.orderType === 1" class="cu-form-group ">
							<view class="title text-grey">长度</view>
							<input name="goodsLength" type="number" placeholder="长度(cm)/条" v-model="goods.goodsLength"></input>
							<view class="title text-grey">条数</view>
							<input name="goodsNumber" type="number" placeholder="请输入条数" v-model="goods.goodsNumber"></input>
						</view>
						
						<view v-else class="cu-form-group ">
							<view class="title text-grey">米数</view>
							<input name="length" type="number" placeholder="米数(M)/筒" v-model="goods.length"></input>
							<view class="title text-grey">个数</view>
							<input name="goodsNumber" type="number" placeholder="下单数量" v-model="goods.goodsNumber"></input>
						</view>
						
						<view class="cu-form-group ">
							<view class="title text-grey">单价</view>
							<input name="price" type="number" placeholder="单价(元)" v-model="goods.price"></input>
						</view>
					</form>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import ProductItem from './ProductItem'
	export default {
		components:{
			ProductItem
		},
		data() {
			const user = uni.getStorageSync("user")
			return {
				showBottomModal:false,
				orderInfo:{
					userName: user.userName,
					orderUser: user.loginName,
					orderType:2,
					orderExts:[],
				},
				orderTypeName:'按重量',
				orderTypeList:[
					{id:1, name:'按条数'},
					{id:2, name:'按重量'}
				],
				goods:{
					productNo: null, // 产品编号
					productName: null, // 产品名称
					productId: null, // 产品ID
					requirement:null , // 要求
					width:null , // 宽度
					weight:null , // 克重
					goodsLength:null , // 长度
					goodsNumber:0 , // 下单数量/条数
					price:null , // 单价
				},
				productName:'请选择产品',
				productList:[],
			}
		},
		onLoad() {
			this.getProductList();
		},
		methods: {
			// 获取可用产品列表
			getProductList(){
				this.$request.post({url:'/product/getValidateProducts'}).then(res => {
					this.productList = res.data
				})
			},
			// 选择产品
			changeProduct(e){
				const product = this.productList[e.detail.value]
				this.productName = product.name;
				this.goods = {
					productName: product.name  || null, // 产品名称
					productNo: product.productNo || null, // 产品编号
					productId: product.id || null, // 产品ID
					requirement:product.requirement || null , // 要求
					width: product.width || null, // 宽度
					weight: product.weight || null, // 克重
					length: product.length || null, //米数
					goodsLength: 1, // 长度
					goodsNumber:1 , // 下单数量/条数
					price:product.price ||  null, // 单价
				};
			},
			// 选择问题类型
			changeOrderType(e){
				this.orderInfo.orderType = this.orderTypeList[e.detail.value].id;
				this.orderTypeName = this.orderTypeList[e.detail.value].name;
			},
			// 显示添加产品的modal
			showAddProductModal(e){
				this.productName = '请选择产品';
				this.goods = {};
				this.showBottomModal = !this.showBottomModal;
			},
			// 将产品追加到产品列表里面去
			pushGoods(e){
				this.orderInfo.orderExts.push(this.goods)
				this.showBottomModal = !this.showBottomModal;
				console.log(this.orderInfo);
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
