<template>
    <article>
        <h3>Latest Cards</h3>
        <SpreadCards
        :PageSize="pageSize"
        :PageNumber="pageNumber"
        v-model:maxCards="maxCards"
        :key="pageNumber"
        />
    </article>
</template>

<script setup>
    import { ref, watch } from 'vue'
    import SpreadCards from './SpreadCards.vue';
    const pageSize = ref(10)
    const maxCards = ref()
    const maxPages = ref()
    const pageNumber = ref(1)

    function generateRandomInt(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    watch(maxCards, ()=>{
        maxPages.value = Math.ceil(Number(maxCards.value / pageSize.value))
        pageNumber.value = generateRandomInt(1, maxPages.value)
    })
    
</script>

<style scoped>
    article{
        max-width: 1440px;
        margin: 60px auto 0px;
    }
    h3{
        font-family: var(--font-Noto-Sans); 
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 40px;
        margin-left: 20px;
    }
</style>