<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	import Home from './components/home'
	export default {
		name: "App",
		components: {
			Home,
		}
	};
</script>

<style>
	#app {
		background: #fff;
	}
</style>
