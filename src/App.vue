<template>
	<NavBar />
	<RouterView />
	
	<div class="circle-wrapper">
		<div class="circle circle1"></div>
		<div class="circle circle2"></div>
		<div class="circle circle3"></div>
		<div class="circle circle4"></div>
	</div>
</template>

<script>
	import NavBar from './components/NavBar.vue';
	import { RouterView } from 'vue-router';
	
	export default{
		components: {
			NavBar,
			RouterView
		}
	}
</script>

<style scoped>

	.circle-wrapper{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;
		filter: opacity(.7);
		pointer-events: none;
	}
	.circle {
		position: absolute;
		border-radius: 50%;
		top: 50%;
		left: 40%;
		height: 100%;
		filter: blur(300px);
		z-index: -1;
	}

	.circle1 {
		width: 300px;
		height: 300px;
		background-color: var(--color-third);
		animation: rotate 10s linear infinite;
	}

	.circle2 {
	width: 400px;
	height: 400px;
	background-color: var(--color-third);
	animation: rotate 20s linear infinite;
	}

	.circle3 {
	width: 600px;
	height: 600px;
	background-color: var(--color-second);
	animation: rotate 30s linear infinite;
	}

	.circle4 {
	width: 600px;
	height: 600px;
	background-color: var(--color-second);
	animation: rotate 60s linear infinite;
	}

	@keyframes rotate {
	0% {
		transform: rotate(0deg) translate(500px) rotate(0deg);
	}
	100% {
		transform: rotate(360deg) translate(500px) rotate(-360deg);
	}
	}
</style>
