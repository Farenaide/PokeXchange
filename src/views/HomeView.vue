<template>
	<main>
		<WelcomeShowcase/>
		<LatestCards/>
	</main>
</template>

<script>

	import LatestCards from '../components/LatestCards.vue';
	import WelcomeShowcase from '../components/WelcomeShowcase.vue';

	export default{
		components: {
    WelcomeShowcase,
    LatestCards
}
	}
</script>