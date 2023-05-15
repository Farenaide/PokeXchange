<template>
		<div class="card-wrapper">
			<ParallaxEffect :reflex-type-prop="'noEffect'" :intensity-parallax="5">
				<CardInformations/> 
			</ParallaxEffect>
		</div>
</template>

<script setup>
	import CardInformations from '../components/CardInformations.vue'; 
	import ParallaxEffect from '../components/ParallaxEffect.vue';

</script>

<style scoped>

	.card-wrapper{
		max-width: 800px;
		height: 510px;
		border: 1px dotted red;
		
	}
</style>