<template>
  	<div class="pageOne">
          <h1>{{ title }}</h1>
          <div>
              <hr/>
              <h4 class="page_one_h4" :class="{active: isActive}">{{ page.name }}</h4>
              <h5 :class="['page_one_h4', isH5 ? 'active' : '']">{{ page.text }}</h5>
              <h6 :style="{ color: page.color, fontSize: '20px', }">{{ page.value }}</h6>
              <p>
                  当前商品价格：￥{{ price }} 
                   / 打折：{{ num }}
                   / 折后价：{{ salePrice }}
                   / 是否打折：{{ onOff }}
                   <button @click="sale">yes</button>
                   <button @click="nosale">no</button>
                   <button @click="toTimeToHandle">延时</button>
              </p>
          </div>
    </div>
</template>

<script>
export default {
	name: "pageOne",
	data() {
		return {
            title: "pageOne",
            isActive: false,
            isH5: true,
		};
    },
    methods: {
        sale() {
            this.$store.commit('changeOnOff', {onOff: true})  //  触发store方法改变state值
        },
        nosale() {
            this.$store.commit('changeOnOff', {onOff: false})
        },
        toTimeToHandle() {
            this.$store.dispatch('toChangeOnOff', {onOff: true})
        }
    },
    computed: {
        page() {
            return this.$store.state.pages[0]   // 使用计算属性，获取store里面的数据
        },
        price() {
            return this.$store.state.price
        },
        onOff() {
            return this.$store.state.onOff
        },
        num() {
            return this.$store.getters.filterData({index: 2})  // 获取getters里面处理后的数据
        },
        salePrice() {
            return this.$store.getters.handlePrice({num: this.num})
        }
    }
};
</script>

<style scoped>
    .page_one_h4 {
        line-height: 50px;
        font-size: 30px;
        color:darkolivegreen;
    }
	.active {
		color:darkmagenta;
	}
</style>
