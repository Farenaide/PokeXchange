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
    import { ref, onMounted } from 'vue'

    export default {
    name: "LatestCards",
    setup() {
        const LatestCards = ref([]);

        const defaultArr = ()=>{
            for (let index = 1; index < 11; index++) {
                LatestCards.value.push({cardId: `${index}`, cardName: 'Default Card', cardImage: './public/loadingTCG.png'})
            }
        }
        defaultArr()

        const randomNumber = (min, max) => {
            return Math.random() * (max - min) + min;
        };

        onMounted(()=>{
            apiTCG.get('/cards', {
                params: {
                    pageSize: 10,
                    page: randomNumber(1, 1612), // número da página
                },
            }).then((response) => {
                const cardsArr = [...response.data.data];
                const totalArr = [];

                cardsArr.map((card) => {
                const cardName = card.name;
                const cardId = card.id;
                const cardImage = card.images.small;
                totalArr.push({ cardId, cardName, cardImage });
                });

                LatestCards.value = totalArr;
                console.log(totalArr);
            });
        })

        return {
            LatestCards,
        };
    },
    components: {
        ParallaxCard,
    },
};
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
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        column-gap: 45px;
    }
    ul li{
        margin-bottom: 50px;
    }
    img{
        box-sizing: border-box;
        border-radius: 20px;
    }

    li img{
        height: 350px;
    }
</style>