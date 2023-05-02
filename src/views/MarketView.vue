<template>
    <div class="wrapper-template">
        <div class="side-bar">
            <FilterMarket
                @changeSearchName="handleName"
                @changeType="handleType"
                @changeSuperType="handleSuperType"
                @changeSubtype="handleSubtype"
                @changeHp="handleHealthPoints"
            />
        </div>
        <div class="wrapper-itens">
            <SpreadCards
                class="market-itens"
                :Name="searchName"
                :PageNumber="1"
                :PageSize="24"
                :SelectedTypes="selectedTypes"
                :SelectedSuperType="selectedSuperType"
                :SelectedSubtypes="selectedSubtype"
                :SelectedHealthPoints="selectedHealthPoint"
                :key="[selectedTypes, searchName, selectedSuperType, selectedSubtype, selectedHealthPoint]"
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
            const selectedSuperType = ref('Pokémon')
            const selectedSubtype = ref('*')
            const selectedHealthPoint = ref('')

            const handleName = (newName)=>{
                searchName.value = newName
            }

            const handleType = (newType)=>{
                selectedTypes.value = newType
            }

            const handleSuperType = (newSuperType)=>{
                selectedSuperType.value = newSuperType
            }

            const handleSubtype = (newSubtype)=>{
                selectedSubtype.value = newSubtype
            }

            const handleHealthPoints = (newHelthPoints)=>{
                selectedHealthPoint.value = newHelthPoints
            }

            const typeFilter = ref('')
            return {
                searchName,
                typeFilter,
                handleName,
                selectedTypes,
                selectedSuperType,
                selectedSubtype,
                selectedHealthPoint,
                handleType,
                handleSuperType,
                handleSubtype,
                handleHealthPoints
            }
        },
    }
</script>

<style scoped>
    .wrapper-template{
        box-sizing: border-box;
        display: flex;
        max-width: 1440px;
        margin: 50px auto 0;
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
    }
    .market-itens{
        max-width: 990px;
        height: 1589px;
        margin-right: 0;
        margin-top: 20px;
    }
</style>