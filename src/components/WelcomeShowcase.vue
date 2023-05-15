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
            <div class="card1">
                <SpreadCards
                        :PageNumber="7"
                        :PageSize="1"
                        :SelectedRarity="'Rare Holo VMAX'"
                        :ImageSize="'large'"
                        :HavePrice="false"
                />
            </div>
            <div class="card2">
                <SpreadCards
                        :PageNumber="12"
                        :PageSize="1"
                        :SelectedRarity="'Rare Holo VMAX'"
                        :ImageSize="'large'"
                        :HavePrice="false"
                />
            </div>
            <div class="card3">
                <SpreadCards
                        :PageNumber="11"
                        :PageSize="1"
                        :SelectedRarity="'Rare Holo VMAX'"
                        :ImageSize="'large'"
                        :HavePrice="false"
                />
            </div>
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
        position: relative;
        height: 350px;
        margin-left: -100px;
        margin-top: -140px;
    }

    .card1 {
        width: 250px;
        position: absolute;
        z-index: 2;
        rotate: -20deg;
        top: 20px;
    }
    .card2{
        position: absolute;
        width: 250px;
        z-index: 1;
        left: 100px;
    }
    .card3{
        top: 20px;
        position: absolute;
        width: 250px;
        left: 200px;
        rotate: 20deg;
    }

</style>

<style>
.card1 .parallax-effect img,
.card2 .parallax-effect img,
.card3 .parallax-effect img{
    height: 430px;
    width: 300px;
}

.card1 .parallax-effect,
.card2 .parallax-effect,
.card3 .parallax-effect{
    height: 450px;
    width: 321px;
}
</style>