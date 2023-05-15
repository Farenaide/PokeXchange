<template>
        <div class="wrapper">
            <div class="wrapper-left">
                <h3>{{ dataCards.cardName }}</h3>
                <img
                    class="card"
                    :src="dataCards.cardImage"
                    :alt="dataCards.cardName"
                >
                <div :class="['card-price', {'sold-out' : dataCards.cardPrice==='SOLD OUT'}]">
                        <p v-if="dataCards.cardPrice"><i class="fa-brands fa-ethereum"></i> {{ dataCards.cardPrice }}</p>
                        <p v-else><span class="skeleton-icon"><i class="fa-brands fa-ethereum"></i></span> <span class="skeleton-price">Loading...</span></p>
                </div>
            </div>

            <div class="description-wrapper">
                <div class="description" v-if="dataCards.cardAbilities.length > 0" >
                    <h4 class="description-title">Abilities</h4>
                    <div class="description-content" v-for="ability in dataCards.cardAbilities" :key="ability">
                        <h5>{{ ability.name }}</h5>
                        <p>{{ ability.text }}</p>
                    </div>
                </div>
                <div class="description" v-if="dataCards.cardAttacks.length > 0">
                    <h4 class="description-title">Attacks</h4>
                    <div class="description-content" v-for="attack in dataCards.cardAttacks" :key="attack">
                        <h5>{{ attack.name }}</h5>
                        <p>{{ attack.text }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
    import apiTCG from '@/services/apiTCG.js'
    import apiETH from '@/services/apiETH.js'
    import { reactive, onMounted, ref } from 'vue'
    
    const dataCards = reactive({
        cardId: `1`,
        cardName: 'Default Card',
        cardImage: '/loadingTCG.gif',
        cardPrice: 0,
        cardAbilities: [],
        cardAttacks: []
    })

    const props = defineProps({
        cardId: {type: String, default:'pl1-1'}
    })
    
    const EURtoETH= ref()

    onMounted(()=>{
        apiETH.get('/ETH-EUR').then((response)=>{
            EURtoETH.value = response.data.ETHEUR.ask * 100
        })
        apiTCG.get(`/cards/${props.cardId}`).then((response) => {
            const card = response.data.data           
            let cardPrice = 0 
            if(Object.prototype.hasOwnProperty.call(card, 'cardmarket')){
                    cardPrice = (card.cardmarket.prices.trendPrice / EURtoETH.value).toFixed(6)
            }else {
                    cardPrice = 'SOLD OUT'
            }
            if(Object.prototype.hasOwnProperty.call(card, 'attacks')){
                dataCards.cardAttacks = card.attacks
            }
            if(Object.prototype.hasOwnProperty.call(card, 'abilities')){
                dataCards.cardAbilities = card.abilities
            }
            dataCards.cardPrice = cardPrice
            dataCards.cardImage = card.images.small
            dataCards.cardName = card.name            
        });
    })

</script>

<style scoped>

    .wrapper{
        box-sizing: border-box;
        background-color: #476f8f54;
        border-radius: 15px;
        backdrop-filter: blur(10px); 
        border: 2px solid #ffffff49;
        display: flex;
        gap: 20px;
        height: 100%;
        width: 100%;
        padding: 20px;
        user-select: text;
    }
    .title1{
        text-align: start;
    }
    .card{
        height: 400px;
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
        width: 230px;
        padding: 5px;
        border-radius: 15px;
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
    .wrapper-left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .wrapper-left h3{
        font-size: 17px;
        font-family: var(--font-Noto-Sans);
        font-weight: bold;
    }
    .description{
        --border-radius: 15px;
        margin-top: 20px;
        position: relative;
        border-radius: var(--border-radius);
        padding: 20px 15px 15px;
        border-bottom: 2px solid var(--color-white);
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-width: 190px;
    }
    .description::before{
        box-sizing: border-box;
        content: '';        
        width: 100%;
        height: 100%;
        top: 2px;
        left: 0;
        position: absolute;
        border: 2px solid var(--color-white);
        border-radius: var(--border-radius);
        mask-image: linear-gradient(to right,var(--color-white) 25px,transparent 25px, transparent 145px,var(--color-white) 145px);
        -webkit-mask-image: linear-gradient(to right,var(--color-white) 25px,transparent 25px, transparent 145px,var(--color-white) 145px);
        pointer-events: none;
    }

    .description-title{
        position: absolute;
        top: 0px;
        left: 30px;
        font-size: 30px;
        transform: translateY(-50%);
    }
    .description-content{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    h5{
        font-size: 20px;
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
</style>

