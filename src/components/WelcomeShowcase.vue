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
        <div class="three-cards">
            <SpreadCards                    
                    :PageNumber="3"
                    :PageSize="3"
                    :SelectedRarity="'Rare Holo VMAX'"
                    :ImageSize="'large'"
                    :HavePrice="false"
            />
        </div>
    </article>
</template>

<script setup>
    import SpreadCards from "@/components/SpreadCards.vue"
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

    .three-cards{
        position: absolute;
        width: 500px;
        height: 500px;
        right: 150px;
        display: flex;
        align-items: center;
        margin-top: -150px;
    }
    .three-cards ul{
        position: absolute;
        height: 100%;
        width: 500px;
    }

    .three-cards ul :first-child{
        margin: 50px;
    }

    .three-cards ul > :nth-child(1) {
        position: absolute;
        top: 0;
        left: -55px;
        z-index: 2;
    }

    .three-cards ul > :nth-child(2) {
        position: absolute;
        top: 10%;
        left: 75px;
        pointer-events: none;
        rotate: 15deg;
        z-index: 1;
    }

    .three-cards ul > :nth-child(3) {
        position: absolute;
        top: 12%;
        left: 140px;
        rotate: 30deg;
        pointer-events: none;
    }

</style>

<style>
    .three-cards .load{
        height: 400px;
    }
</style>