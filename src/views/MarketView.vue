<template>
    <div class="wrapper-itens">
        <SpreadCards class="market-itens"
        :PageNumber="'1'"
        :PageSize="'36'"
        />
    </div>
</template>

<script>

    import SpreadCards from '../components/SpreadCards.vue';

    export default{
        components: {
    SpreadCards
}
    }

</script>

<style scoped>
    .wrapper-itens{
        max-width: 1440px;
        height: 85vh;
        margin: 0 auto;
        overflow-y: scroll;
    }
    .market-itens{
        width: 990px;
        height: 1589px;
        margin: auto;
        margin-right: 0;
        margin-top: 70px;
    }
</style>