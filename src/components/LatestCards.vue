<template>
    <article>
        <h3>Latest Cards</h3>
        <SpreadCards
        :PageSize="10"
        :PageNumber="randomPage"
        @max-pages="handleMaxPages"
        :key="maxPages"
        />
    </article>
</template>

<script>
    import SpreadCards from './SpreadCards.vue';
    import { ref } from 'vue'

    export default {
        name: "LatestCards",
        components: {
            SpreadCards
        },
        setup(){
        
            const randomNumber = (min, max)=>{
            return Math.random() * (max - min) + min;
            }

            const maxPages = ref(null)
            const randomPage = ref(1)

            const handleMaxPages = (NewValue)=>{
                maxPages.value = NewValue.value
                randomPage.value = Math.ceil(randomNumber(1, NewValue.value))
            }

            return{
                maxPages,
                handleMaxPages,
                randomPage
            }
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
        margin-left: 20px;
    }
</style>