<script setup>
	import { RouterView } from 'vue-router'
</script>

<template>
	<NavBar />
	<RouterView />
</template>

<script>
	import NavBar from './components/NavBar.vue';
		export default{
			components: {
			NavBar,
		}
	}
</script>

<style scoped>

</style>
