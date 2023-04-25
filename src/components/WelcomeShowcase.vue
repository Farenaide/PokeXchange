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
        <picture>
            <ParallaxCard class="card1">
                <img :src="card1[0]" :alt="card1[1]">
            </ParallaxCard>
            <img class="card2" :src="card2[0]" :alt="card2[1]">
            <img class="card3" :src="card3[0]" :alt="card3[1]">
        </picture>
    </article>
</template>

<script>
    import ParallaxCard from './ParallaxCard.vue';
    import { onMounted, ref } from 'vue'
    import apiTCG from '../services/apiTCG';

    export default{
    name: "WelcomeShowcase",
    components: { ParallaxCard },
    setup(){
        const randomNumber = (min, max)=>{
            return Math.random() * (max - min) + min;
        }

        const cardDefault = ['./public/loadingTCG.png', 'Background Card']
        const card1 = ref(cardDefault)
        const card2 = ref(cardDefault)
        const card3 = ref(cardDefault)

        onMounted(()=>{
            apiTCG.get("/cards", {
            params: {
                pageSize: 3,
                page: randomNumber(1, 5375) // número da página
            }
        }).then(response => {     
            card1.value = [response.data.data[0].images.large, response.data.data[0].name]
            card2.value = [response.data.data[1].images.large, response.data.data[1].name]
            card3.value = [response.data.data[2].images.large, response.data.data[2].name]
        });
        })

        return{
            card1,
            card2,
            card3,
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
        margin: 43px auto 0;
        flex-wrap: wrap;
        position: relative;
        gap: 40px;
        padding: 0 20px;
    }
    picture{
        position: absolute;
        right: 438px;
        height: 350px;
    }

    .card1 :first-child, picture > .card1, .card2, .card3{
        height: 400px;
        border-radius: 20px;
        box-sizing: border-box;
        position: absolute;
    }
    .card2{
        transform: rotate(16.73deg);
        margin-top: 10px;
        margin-left: -30px;
        z-index: -1;
    }
    .card3{
        transform: rotate(32.73deg);
        margin-top: 20px;
        margin-left: 50px;
        z-index: -2;
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