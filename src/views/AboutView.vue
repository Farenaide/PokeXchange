<template>
	<div>
		<ParallaxEffect
			:src-image="'https://images.pokemontcg.io/swsh3/20_hires.png'"
			:alt-image="'Charizard'"
			:reflex-type-prop="'Rare Holo VMAX'"
		/>
	</div>
</template>

<script setup>
	import ParallaxEffect from '../components/ParallaxEffect.vue';

</script>

<style scoped>
	div{
		width: 250px;
		height: 350px;
		margin: auto;
	}
</style>