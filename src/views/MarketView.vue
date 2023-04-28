<template>
    <div class="wrapper-template">
        <div class="side-bar">
            <FilterMarket
                @changeSearchName="handleName"
                @changeType="handleType"
            />
        </div>
        {{ typeFilter }}
        <div class="wrapper-itens">
            <SpreadCards
                class="market-itens"
                :Name="searchName"
                :PageNumber="1"
                :PageSize="24"
                :SelectedTypes="selectedTypes"
                :key="[selectedTypes, searchName]"
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
            const selectedTypes = ref('')

            const handleName = (newName)=>{
                searchName.value = newName
            }

            const handleType = (newType)=>{
                selectedTypes.value = newType
            }

            const typeFilter = ref('')
            return {
                searchName,
                typeFilter,
                handleName,
                selectedTypes,
                handleType
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
        max-width: 280px;
        height: 85vh;
    }
    .wrapper-itens{
        flex-grow: 1;
        max-width: 1100px;
        height: 85vh;
        margin: 0 auto;
        overflow-y: scroll;
        border: 1px dotted rgb(0, 225, 255);
    }
    .market-itens{
        max-width: 990px;
        height: 1589px;
        margin-right: 0;
        margin-top: 70px;
    }
</style>