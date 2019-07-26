<template>
	<div>
		<div class="hello">
			<h1> <input type="text" v-model="msg" >{{ head_value }}</h1>
		</div>
		<div class="nav">
			<router-link v-for="(title, index) in titles" :key="index + ''" :to="`/home/${title}`" tag="span"> 
				<span class="nav_item">{{ title }}</span> 
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		titles: {type: Array},
		head_value: {type: String},  // 子级绑定，改变父级的值
	},
	data() {
		return {
			msg: this.head_value
		};
	},
	watch: {
		head_value(value) {
			console.warn(value, '33333333333333333')   // 3.父级传过来的值变化了
		},
		msg(value) {
			console.warn(value, '111111111')   // 1.子级自己的msg值变化了
			this.$emit('changeHeadValue', value)
		}
	},
};
</script>

<style scoped>
	.hello {
		background-color: cadetblue;
		width: 100%;
		height: 100px;
		text-align: center;
		line-height: 100px;
	}
	.nav {
		background-color: #a35210;
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		cursor: pointer;
	}
	.nav_item {
		margin: 20px;
	}
</style>
