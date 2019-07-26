<template>
  	<div class="home">
		<HelloWorld 
			v-bind:titles="titles"
			:head_value="head_value"
			@changeHeadValue="changeHeadValue"
		>
		</HelloWorld>
		<router-view />
	</div>
</template>

<script>
import HelloWorld from './HelloWorld'
export default {
	name: "home",
	components: {
		HelloWorld,
	},
	data() {
		return {
			titles: ['page1', 'page2', 'page3'],  //  父级向子级传递数据
			head_value: 'Welcome to Your Vue.js App'
		};
	},
	methods: {
		changeHeadValue(value) {
			console.warn(value, '22222222......')  // 2. 子级传过来的value.....
			this.head_value = value
		}
	}
};
</script>
