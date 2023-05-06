<template>
    <div class="wrapper-template">
        <div class="side-bar">
            <SearchByName v-model:selected-by-name="selectedName"/>

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
        <div class="wrapper-itens">
            <SpreadCards
                class="market-itens"
                :Name="selectedName"
                :PageNumber="1"
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
</template>

<script setup>
    import SpreadCards from "@/components/SpreadCards.vue"
    import { ref } from 'vue'
    import SearchByName from "../components/SearchByName.vue";
    import SearchBySubtype from "../components/SearchBySubtype.vue"
    import SearchBySupertype from "../components/SearchBySupertype.vue";
    import SearchByRarity from "../components/SearchByRarity.vue";
    import SearchByType from "../components/SearchByType.vue";
    import SearchByHealthPoints from "../components/SearchByHealthPoints.vue";

    const selectedName = ref('')
    const selectedSubtype = ref('*')
    const selectedSupertype = ref('Pokémon')
    const selectedRarity = ref('*')
    const selectedTypes = ref([])    
    const selectedHealthPoints = ref('')

    const pageSize = ref(24)

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
