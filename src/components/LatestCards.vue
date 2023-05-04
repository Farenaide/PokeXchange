<template>
    <article>
        <h3>Latest Cards</h3>
        <SpreadCards
        :PageSize="10"
        :PageNumber="1"
        />
    </article>
</template>

<script setup>
    import SpreadCards from './SpreadCards.vue';
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
        margin-left: 20px;
    }
</style>