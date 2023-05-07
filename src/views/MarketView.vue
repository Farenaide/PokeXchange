<template>
    <div class="wrapper-template">
        <div class="side-bar">
            <SearchByName v-model:selected-by-name="selectedName" :selected-supertype="selectedSupertype"/>

            <SearchBySupertype v-model:selected-supertype="selectedSupertype" />

            <SearchBySubtype v-model:selected-subtype="selectedSubtype" :selected-supertype="selectedSupertype"/>

            <SearchByRarity v-model:selected-rarity="selectedRarity" :selected-supertype="selectedSupertype"/>
            
            <SearchByType 
            v-model:selected-types="selectedTypes" 
            :selected-supertype="selectedSupertype"
            />

            <SearchByHealthPoints 
            v-show="selectedSupertype !== 'Energy'"
            v-model:health-points="selectedHealthPoints" 
            :selected-supertype="selectedSupertype" />

        </div>

        <div class="market-wrapper">
            <div class="pagination-wrapper">
                    <MarketPagination :set-total-pages="maxPages"
                    v-model:current-page="currentPage"
                    :selected-supertype="selectedSupertype"
                    />
            </div>
            <div class="wrapper-itens">
                <SpreadCards
                    class="market-itens"
                    v-model:maxCards="maxCards"
                    :Name="selectedName"
                    :PageNumber="currentPage"
                    :PageSize="pageSize"
                    :SelectedHealthPoints="selectedHealthPoints"
                    :SelectedTypes="selectedTypes"
                    :SelectedSuperType="selectedSupertype"
                    :SelectedSubtypes="selectedSubtype"
                    :SelectedRarity="selectedRarity"
                    :key="[
                        selectedName,
                        selectedHealthPoints,
                        selectedTypes,
                        selectedSupertype,
                        selectedSubtype,
                        selectedRarity
                    ]"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import SpreadCards from "@/components/SpreadCards.vue"
    import { ref, watch } from 'vue'
    import SearchByName from "../components/SearchByName.vue";
    import SearchBySubtype from "../components/SearchBySubtype.vue"
    import SearchBySupertype from "../components/SearchBySupertype.vue";
    import SearchByRarity from "../components/SearchByRarity.vue";
    import SearchByType from "../components/SearchByType.vue";
    import SearchByHealthPoints from "../components/SearchByHealthPoints.vue";
    import MarketPagination from "../components/MarketPagination.vue";

    const selectedName = ref('')
    const selectedSubtype = ref('*')
    const selectedSupertype = ref('Pokémon')
    const selectedRarity = ref('*')
    const selectedTypes = ref([])    
    const selectedHealthPoints = ref('')
    const currentPage = ref(1)
    const pageSize = ref(24)
    const maxCards = ref(0)
    const maxPages = ref(0)

    watch(maxCards, (newValue)=>{
        maxPages.value = Math.ceil(newValue / pageSize.value)
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
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 20px;
        max-width: 280px;
        max-height: 80vh;
        flex-grow: 1;
    }
    .wrapper-itens{
        flex-grow: 1;
        max-height: 78vh;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .market-wrapper{
        display: flex;
        flex-grow: 1;
        position: relative;
        margin-top: 20px;
        width: 100%;
        align-items: center;
    }

    .pagination-wrapper{
        position: absolute;
        top: -20px;   
        right: calc(50% - 50px);
    }
</style>
