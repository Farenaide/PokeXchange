<template>
    <article>
        <h3>Latest Cards</h3>
        <SpreadCards
        :PageSize="10"
        :PageNumber="2"
        :SelectedSubtypes="'MEGA'"
        />
    </article>
</template>

<script>
    import SpreadCards from './SpreadCards.vue';

    export default {
        name: "LatestCards",
    components: {
        SpreadCards
    }
};
</script>

<style scoped>
    article{
        max-width: 1440px;
        margin: 60px auto 60px;
        padding: 0 20px;
    }
    h3{
        font-family: var(--font-Noto-Sans); 
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 40px;
    }
</style>