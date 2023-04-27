<template>
    <div class="wrapper-template">
        <div class="side-bar">
            <FilterMarket
            v-model:searchName="searchName"
            />
        </div>
        <div class="wrapper-itens">
            <SpreadCards
                class="market-itens"
                :Name="searchName"
                :PageNumber="1"
                :PageSize="24"
                :key="searchName"
            />
        </div>
    </div>
</template>

<script>
    import FilterMarket from "@/components/FilterMarket.vue"
    import SpreadCards from "@/components/SpreadCards.vue"
    import { ref } from 'vue'
    
    export default {
        components: {
            SpreadCards,
            FilterMarket,
        },
        setup() {
            const searchName = ref('')
            return {
                FilterMarket,
                searchName
            }
        },
    }
</script>

<style scoped>
    .wrapper-template{
        box-sizing: border-box;
        display: flex;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .side-bar{
        flex-grow: 1;
        max-width: 100%;
        height: 85vh;
    }
    .wrapper-itens{
        flex-grow: 2;
        max-width: 1440px;
        height: 85vh;
        margin: 0 auto;
        overflow-y: scroll;
        border: 1px dotted red;
    }
    .market-itens{
        max-width: 990px;
        height: 1589px;
        margin-right: 0;
        margin-top: 70px;
    }
</style>