<template>
        <ul>
            <div class="not-found" v-if="dataCards.length == 0">
                <h3>No cards matches your filter</h3>
                <img src="/pikachunotfound.png" alt="Card not found">
            </div>
            <li v-for="card in dataCards" :key="card.cardId">
                <div v-if="HavePrice" :class="['card-price', {'sold-out' : card.cardPrice==='SOLD OUT'}]">
                    <p v-if="card.cardPrice"><i class="fa-brands fa-ethereum"></i> {{ card.cardPrice }}</p>
                    <p v-else><span class="skeleton-icon"><i class="fa-brands fa-ethereum"></i></span> <span class="skeleton-price">Loading...</span></p>
                </div>
                
                <div class="parallax-effect">
                    <ParallaxEffect
                        :src-image="card.cardImage"
                        :alt-image="card.cardName"
                        :reflex-type-prop="card.cardRarity"
                    />
                </div>
            </li>
        </ul>
</template>

<script setup>
    import apiTCG from '@/services/apiTCG.js'
    import apiETH from '@/services/apiETH.js'
    import ParallaxEffect from './ParallaxEffect.vue';
    import { ref, onMounted } from 'vue'

    const props = defineProps({
        PageSize: { type: Number, default: 0 },
        PageNumber: { type: Number, default: 0 },
        Name: { type: String, default: '' },
        ImageSize: { type: String, default: 'small' },
        SelectedTypes: { default: '' },
        SelectedSuperType: { type: String, default: '*' },
        SelectedSubtypes: { type: String, default: '*' },
        SelectedHealthPoints: { type: String, default: '' },
        SelectedRarity: { type: String, default: '*' },
        HavePrice: {type: Boolean, default: true}
    })

    const emit = defineEmits([
        'update:maxCards'
    ])

    const dataCards = ref([]);
    const maxCards = ref(0)
    const EURtoETH = ref(0)

    

    const createLoading = (size) => {
        dataCards.value = []
        if (size > 0) {
            for (let index = 0; index < size; index++) {
            dataCards.value.push({
                cardId: `${index}`,
                cardName: 'Default Card',
                cardImage: '/loadingTCG.gif',
                cardRarity: 'Common'
            })
            }
        }
    }
    createLoading(props.PageSize)

    onMounted(() => {
        
        apiETH.get('/ETH-EUR').then((response)=>{
            EURtoETH.value = response.data.ETHEUR.ask * 100
            apiTCG.get('/cards', {
            params: {
            pageSize: props.PageSize,
            page: props.PageNumber,
            q: `name:"${props.Name}*" subtypes:"${props.SelectedSubtypes}" ${props.SelectedTypes} supertype:"${props.SelectedSuperType}" rarity:"${props.SelectedRarity}" ${props.SelectedHealthPoints}`,
            }
            }).then((response) => {
                createLoading(response.data.data.length)
                response.data.data.map((card, index) => {
                    let cardPrice = 0 
                    if(Object.prototype.hasOwnProperty.call(card, 'cardmarket')){
                            cardPrice = (card.cardmarket.prices.trendPrice / EURtoETH.value).toFixed(6)
                    }else {
                            cardPrice = 'SOLD OUT'
                    }
                    dataCards.value.splice(index, 1, {
                        cardId: card.id,
                        cardName: card.name,
                        cardImage: card.images[`${props.ImageSize}`],
                        cardRarity: card.rarity,
                        cardPrice: cardPrice
                    })
                    dataCards.value.unshift();
                });
                maxCards.value = response.data.totalCount
                emit('update:maxCards', maxCards.value)
            });
        })

    })

</script>


<style scoped>
    ul{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        column-gap: 10px;
        row-gap: 45px;
        position: relative;        
    }

    li{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .parallax-effect{
        width: 250px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
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

    .card-price{
        box-sizing: border-box;
        z-index: 1;
        font-size: 20px;
        text-align: center;
        color: var(--color-white);
        background-color: var(--color-first--variant);
        border: 1px solid #fff;
        backdrop-filter: blur(10px);
        margin: 0 auto;
        width: 230px;
        padding: 5px;
        border-radius: 15px;
        margin-bottom: 5px;
        mix-blend-mode: screen;
    }

    .sold-out{
        color: var(--color-second);
    }

    .skeleton-icon{
        display: inline-block;
        animation: pulsate 2s ease-out;
        animation-iteration-count: infinite; 
        opacity: 0.1;

    }

    .skeleton-price{
        display: inline-block;
        animation: pulsate 2s ease-out;
        animation-iteration-count: infinite; 
        opacity: 0.1;
    }

    @keyframes pulsate {
        0% { 
            opacity: 0.1;
        }
        50% { 
            opacity: 1.0;
        }
        100% { 
            opacity: 0.1;
        }
    }

    .card-price p{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
</style>