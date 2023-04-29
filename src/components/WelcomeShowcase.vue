<template>
    <article>
        <h2>Buy, Sell and Trade hundreds NFT <span class="pokemonString">Pokémon</span> <span class="cardsString">Cards</span></h2>
        <p class="info">A non-fungible token (NFT) is a unique digital identifier that cannot be copied, substituted, or subdivided, that is recorded in a blockchain, and that is used to certify ownership and authenticity.</p>
        <div class="datas">
            <div class="data">
                <p>950M</p>
                <p>Total Volum</p>
            </div>
            <div class="data">
                <p>800+</p>
                <p>Asset Number</p>
            </div>
            <div class="data">
                <p>120K</p>
                <p>Daily Trades</p>
            </div>
        </div>
        <SpreadCards class="threeCard"
        :PageSize="3"
        :PageNumber="randomPage"
        :Subtypes="'mega'"
        :ImageSize="'large'"
        />
    </article>
</template>

<script>
    import { ref } from 'vue'

import SpreadCards from './SpreadCards.vue';

    export default{
    name: "WelcomeShowcase",
    components: { SpreadCards },
    setup(){
        const randomNumber = (min, max)=>{
            return Math.random() * (max - min) + min;
        }
        const randomPage = ref(randomNumber(1, 35/3))

        return{
            randomPage
        }
    }

}
</script>

<style scoped>
    article{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 1440px;
        height: 600px;
        margin: 0 auto;
        flex-wrap: wrap;
        position: relative;
        gap: 40px;
        padding: 0 20px;
    }
    picture{
        position: absolute;
        background-color: rgba(0, 255, 255, 0.527);
        
    }
    .threeCard{
        display: flex;
    }

    h2{
        font-family: var(--font-Noto-Sans);    
        font-weight: 700;
        font-size: 50px;
        width: 470px;
        line-height: 60px;
    }
    .pokemonString{
        color: var(--color-second);
    }
    .cardsString{
        color: var(--color-third)
    }

    .info{
        width: 470px;
        font-family: var(--font-Roboto);
        font-weight: 300;
        text-align: justify;
        font-size: 16px;
        color: var(--color-white);
    }
    .datas{
        width: 470px;
        display: flex;
        justify-content: space-between;
        justify-items: start;
    }
    .data {
        font-family: var(--font-Roboto);
        color: var(--color-white);
        display: block;
        text-align: center;
    }
    .data :first-child{        
        font-size: 30px;
        font-weight: 700;
    }
    .data :last-child{
        font-size: 15px;
        font-weight: 200;
    }    
</style>

<style>
.threeCard { 
    position: relative;
    margin-top: -10px;
}

.threeCard :nth-child(3) img{
    height: 400px;
    box-shadow: 5px 5px 20px rgb(0, 0, 0);
    border-radius: 15px;
    transform: rotate(5deg);
}

.threeCard :nth-child(2) img{
    height: 400px;
    position: absolute;
    top: -30px;
    transform: rotate(16.73deg);
    left: 100px;
    pointer-events: none;
    box-shadow: 5px 5px 20px black;
    border-radius: 15px;
}

.threeCard :nth-last-child(3) img{
    height: 400px;
    position: absolute;
    top: -30px;
    transform: rotate(32.73deg);
    left: 200px;
    pointer-events: none;
    box-shadow: 5px 5px 20px black;
    border-radius: 15px;
}

</style>