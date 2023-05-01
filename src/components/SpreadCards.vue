<template>
        <ul>
            <div class="not-found" v-if="dataCards.length == 0">
                <h3>No cards matches your filter</h3>
                <img src="/pikachunotfound.png" alt="Card not found">
            </div>
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
        const createLoading =(size)=>{
            dataCards.value = []
            if(size > 0){
                for (let index = 0; index < size; index++) {
                    dataCards.value.push({
                        cardId: `${index}`, 
                        cardName: 'Default Card', 
                        cardImage: '/loadingTCG.gif'
                    })
                }
            }
        }
        createLoading(props.PageSize)
        
        onMounted(()=>{
            apiTCG.get('/cards', { 
                params: {
                    pageSize: props.PageSize, 
                    page: props.PageNumber,
                    q: `name:"${props.Name}*" subtypes:"${props.SelectedSubtypes}" ${props.SelectedTypes} supertype:"${props.SelectedSuperType}"`,
            }}).then((response) => {
                createLoading(response.data.data.length)
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
        PageSize: {type: Number, default: 0},
        PageNumber: {type: Number, default: 0},
        Name: {type: String, default:'*'},           
        ImageSize: {type: String, default:'small'},
        SelectedTypes: {type: String, default:''},
        SelectedSuperType: {type: String, default:'*'},
        SelectedSubtypes: {type: String, default:'*'},
        
    }
}
</script>

<style>
    ul{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        column-gap: 10px;
        row-gap: 45px;
        position: relative;
        
    }
    li img{
        height: 350px;
    }
    li{
        display: block;
        height: 350px;
    }
    .not-found{
        height: 500px;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 70px;
        font-family: var(--font-Noto-Sans);
        color: var(--color-fourth);
        text-align: center;
        font-size: 50px;
        font-weight: 900;
        grid-column: 1/4;
    }

    .not-found img {
        margin-top: 20px;
    }   
</style>