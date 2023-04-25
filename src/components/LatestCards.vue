<template>
    <article>
        <h3>Latest Cards</h3>
        <ul>
            <li v-for="card in LatestCards" :key="card.cardId">
                <ParallaxCard>
                    <img :src="card.cardImage" :alt="card.cardName">
                </ParallaxCard>
            </li>
        </ul>
    </article>
</template>

<script>

    import apiTCG from '@/services/apiTCG.js'
    import ParallaxCard from './ParallaxCard.vue';

    export default {
    name: "LatestCards",
    data() {
        return {
            LatestCards: "Loading..."
        };
    },
    methods: {
        randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }
    },
    mounted() {
        apiTCG.get("/cards", {
            params: {
                pageSize: 8,
                page: this.randomNumber(1, 1600) // número da página
            }
        }).then(response => {
            const cardsArr = [...response.data.data];
            const totalArr = [];
            cardsArr.map(card => {
                const cardName = card.name;
                const cardId = card.id;
                const cardImage = card.images.small;
                totalArr.push({ cardId, cardName, cardImage });
            });
            this.LatestCards = totalArr;
        });
    },
    components: { 
        ParallaxCard 
    }
}
</script>

<style scoped>
    article{
        max-width: 1440px;
        margin: 60px auto 0;
        padding: 0 20px;
    }
    h3{
        font-family: var(--font-Noto-Sans); 
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 40px;
    }
    ul{
        display: flex;        
        flex-wrap: wrap;
        justify-content: space-between;
    }
    ul li{
        margin-bottom: 50px;
    }
    img{
        box-sizing: border-box;
        border-radius: 20px;
    }
</style>