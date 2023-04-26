<template>
        <ul>
            <li v-for="card in dataCards" :key="card.cardId">
                <ParallaxCard>
                    <img :src="card.cardImage" :alt="card.cardName">
                </ParallaxCard>
            </li>
        </ul>
</template>

<script>

import apiTCG from '@/services/apiTCG.js'
    import ParallaxCard from './ParallaxCard.vue';
    import { ref, onMounted } from 'vue'

    export default {
    name: "SpreadCards",
    setup(props) {
        const dataCards = ref([]);

        for (let index = 0; index < props.PageSize; index++) {
            dataCards.value.push({
                cardId: `${index}`, 
                cardName: 'Default Card', 
                cardImage: './public/loadingTCG.gif'
            })
        }

        onMounted(()=>{
            apiTCG.get('/cards', { params: {
                pageSize: props.PageSize, 
                page: props.PageNumber,
                q: props.Name             
            }})
            .then((response) => {
                const cardsArr = [...response.data.data];
                const totalArr = [];
                cardsArr.map((card) => {
                    const cardName = card.name;
                    const cardId = card.id;
                    const cardImage = card.images.small;
                    totalArr.push({ cardId, cardName, cardImage });
                });
                dataCards.value = totalArr;
            });
        })

        return {
            dataCards,
        };
    },
    components: {
        ParallaxCard,
    },
    props:{
        PageSize: {type: Number, default: 10},
        PageNumber: {type: Number, default: 1},
        Name: {type: String}
    }
}
</script>

<style>
    ul{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        column-gap: 45px;
        row-gap: 45px;
    }
    li img{
        height: 350px;
    }
</style>