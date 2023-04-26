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
            apiTCG.get('/cards', { 
                params: {
                    pageSize: props.PageSize, 
                    page: props.PageNumber,
                    q: `name:${props.Name} subtypes:${props.Subtypes}`,
            }}).then((response) => {
                response.data.data.map((card, index) => {
                    dataCards.value.splice(index, 1, {
                        cardId: card.id, 
                        cardName: card.name, 
                        cardImage: card.images[`${props.ImageSize}`]
                    })
                    dataCards.value.unshift(); 
                }); 
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
        PageSize: {type: String, default: 'n/a'},
        PageNumber: {type: String, default: 'n/a'},
        Name: {type: String, default:'*'},        
        Subtypes: {type: String, default:'*'},
        ImageSize: {type: String, default:'small'} //small, large
    }
}
</script>

<style>
    ul{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        column-gap: 10px;
        row-gap: 45px;
    }
    li img{
        height: 350px;
    }
    li{
        display: block;
        height: 350px;
    }
</style>