<template>
	<main>
		<WelcomeShowcase/>
		<PopularCards/>
	</main>
</template>

<script>

	import PopularCards from '../components/PopularCards.vue';
	import WelcomeShowcase from '../components/WelcomeShowcase.vue';

	export default{
		components: {
    WelcomeShowcase,
    PopularCards
}
	}
</script>