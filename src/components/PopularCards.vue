<template>
    <article>
        <h3>Popular Cards</h3>
        <ul>
            <li v-for="card in popularCards" :key="card.id">
                <img :src="card.card" alt="">
            </li>
        </ul>
    </article>
</template>

<script>
    export default {
        name: 'PopularCards',
        data(){
            return{
                popularCards: [
                    {id:1, card:'https://via.placeholder.com/250x350'},
                    {id:2, card:'https://via.placeholder.com/250x350'},
                    {id:3, card:'https://via.placeholder.com/250x350'},
                    {id:4, card:'https://via.placeholder.com/250x350'},
                    {id:5, card:'https://via.placeholder.com/250x350'},
                    {id:6, card:'https://via.placeholder.com/250x350'},
                    {id:7, card:'https://via.placeholder.com/250x350'},
                    {id:8, card:'https://via.placeholder.com/250x350'},
                    {id:9, card:'https://via.placeholder.com/250x350'},
                    {id:10, card:'https://via.placeholder.com/250x350'},
                ]
            }
        }
    }
</script>

<style scoped>
    article{
        max-width: 1440px;
        margin: 60px auto 0;
        padding: 0 20px;
    }
    h3{
        font-family: var(--font-Noto-Sans); 
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 40px;
    }
    ul{
        display: flex;        
        flex-wrap: wrap;
        justify-content: space-between;
    }
    ul li{
        margin-bottom: 50px;
    }
    img{
        box-sizing: border-box;
        border: 2px dotted aqua;
        border-radius: 20px;
    }
</style>