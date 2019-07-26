<template>
  	<div class="pageTwo">
        <h1>{{ title }}</h1>
		<div>
			<p> 当前物品价格：{{ price }} </p>
			<p> 当前打折：{{ num }}</p>
			<p> 打折后金额：{{ handlePrice({num}) }}</p>
			<p> 输入 <input type="number" v-model="num"></p>
		</div>
    </div>
</template>

<script>
	import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
	export default {
		name: "pageTwo",
		data() {
			return {
				title: "pageTwo , two two two ..........",
				aaa: '$',
				num: 2,
			};
		},
		computed: {
			...mapState({     // 计算属性里面 得到全局state
				// price: state => state.price,
				// price: 'price',  // 一种写法
				price: function(state) {
					return state.price + this.aaa  // 这里不能用箭头函数
				},
			}),
			...mapGetters({
				handlePrice: 'handlePrice'
			}),
			getsomething() { }  // 组件自己的计算属性
		},
		methods: {
			tosomething() { },  // 组件自己的方法
			...mapMutations({
				showDrawerBoxHandle: 'showDrawerBoxHandle', // 将store的方法，映射到本地
				addDrawerItem: 'addDrawerItem',
			}),
			...mapActions({
				toChangeOnOff: 'toChangeOnOff'
			})
		}
	};
</script>
