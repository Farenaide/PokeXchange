<template>
    <div class="wrapper-template">
        <div class="side-bar">
            <FilterMarket
                @changeSearchName="handleName"
                @changeType="handleType"
                @changeSuperType="handleSuperType"
                @changeSubtype="handleSubtype"
                @changeHp="handleHealthPoints"
                @changeRarity="handleRarity"
            />
        </div>
        <div class="wrapper-itens">
            <SpreadCards
                class="market-itens"
                :Name="searchName"
                :PageNumber="1"
                :PageSize="pageSize"
                :SelectedTypes="selectedTypes"
                :SelectedSuperType="selectedSuperType"
                :SelectedSubtypes="selectedSubtype"
                :SelectedHealthPoints="selectedHealthPoint"
                :SelectedRarity="selectedRarity"
                @max-pages="handleMaxPages"
                :key="[selectedTypes, searchName, selectedSuperType, selectedSubtype, selectedHealthPoint, selectedRarity]"
            />
        </div>
    </div>
</template>

<script setup>
    import FilterMarket from "@/components/FilterMarket.vue"
    import SpreadCards from "@/components/SpreadCards.vue"
    import { ref, watch } from 'vue'

    const searchName = ref('')
    const selectedTypes = ref('')
    const selectedSuperType = ref('Pokémon')
    const selectedSubtype = ref('*')
    const selectedHealthPoint = ref('')
    const selectedRarity = ref('*')
    const maxPages = ref()
    const allCards = ref([])            
    const pageSize = ref(24)
    
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

    const handleRarity = (newRarity)=>{
        selectedRarity.value = newRarity
    }

    const handleMaxPages = (NewValue)=>{
        maxPages.value = NewValue.value
    }

    watch(maxPages, ()=>{
        allCards.value=[]
        for (let index = 0; index < maxPages.value; index++) {
            allCards.value.push(index)
        }
    })

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
        max-height: 80vh;
    }
    .wrapper-itens{
        flex-grow: 1;
        max-width: 1100px;
        max-height: 80vh;
        margin: 0 auto;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .market-itens{
        margin-right: 0;
        margin-top: 20px;
    }

</style>
