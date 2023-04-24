<template>
    <article>
        <h2>Buy, Sell and Trade hundreds NFT <span class="pokemon">Pokémon</span> <span class="cards">Cards</span></h2>
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
            <img class="card1" src="https://via.placeholder.com/250x350" alt="">
            <img class="card2" src="https://via.placeholder.com/250x350" alt="">
            <img class="card3" src="https://via.placeholder.com/250x350" alt="">
        </picture>
    </article>
</template>

<script>
    export default{
        name: 'WelcomeShowcase'
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
    picture img{
        box-sizing: border-box;
        border: 2px dotted aqua;
        border-radius: 20px;
        position: absolute;
    }
    .card2{
        transform: matrix(-0.97, -0.26, -0.26, 0.97, 0, 0);
        margin-top: 10px;
        margin-left: 50px;
        z-index: -1;
    }
    .card3{
        transform: matrix(-0.87, -0.5, -0.5, 0.87, 0, 0);
        margin-top: 20px;
        margin-left: 100px;
        z-index: -2;
    }
    h2{
        font-family: var(--font-Noto-Sans);    
        font-weight: 700;
        font-size: 50px;
        width: 470px;
        line-height: 60px;
    }
    .pokemon{
        color: var(--color-second);
    }
    .cards{
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
        display: flex;
        width: 470px;
        justify-content: space-between;
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