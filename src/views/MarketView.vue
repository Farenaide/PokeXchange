<template>
    <div class="wrapper-template">
        <!-- <div class="wrapper-informations">
            <ParallaxCard :hasReflect="false" :move-intensity="6">
                    <CardInformations/>
            </ParallaxCard>
        </div> -->

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
        
        <div class="market-wrapper" >
            <div class="wrapper-itens">
                <SpreadCards
                    v-if="whenMounted"
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
                        selectedHealthPoints,
                        selectedName,
                        selectedTypes,
                        selectedSupertype,
                        selectedSubtype,
                        selectedRarity
                    ]"
                />
                <div class="pagination-wrapper">
                    <MarketPagination 
                    :set-total-pages="maxPages"
                    v-model:current-page="currentPage"
                    :selected-supertype="selectedSupertype"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch, onMounted } from 'vue'
    import SpreadCards from "@/components/SpreadCards.vue"
    import SearchByName from "@/components/SearchByName.vue";
    import SearchBySubtype from "@/components/SearchBySubtype.vue"
    import SearchBySupertype from "@/components/SearchBySupertype.vue";
    import SearchByRarity from "@/components/SearchByRarity.vue";
    import SearchByType from "@/components/SearchByType.vue";
    import SearchByHealthPoints from "@/components/SearchByHealthPoints.vue";
    import MarketPagination from "@/components/MarketPagination.vue";
/*     import CardInformations from '../components/CardInformations.vue';
    import ParallaxCard from '../components/ParallaxCard.vue'; */

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
    const whenMounted = ref(false)

    watch(maxCards, (newValue)=>{
        maxPages.value = Math.ceil(newValue / pageSize.value)
    })
    
    onMounted(()=>{
        whenMounted.value = true
    })

</script>

<style scoped>
    .wrapper-template{
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 4fr;
        max-width: 1440px;
        margin: 50px auto 0;
        padding: 20px;
        position: relative;
    }

    .side-bar{
        position: sticky;
        top: 100px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: 280px;
        max-height: 633px;
    }
    .wrapper-itens{
        flex-grow: 1;
        margin-left: 20px;
        overflow-y: scroll;
        overflow-x: hidden;
        position: relative;
        padding-top: 10px;
    }

    .market-wrapper{
        display: flex;
        flex-grow: 1;
        position: relative;
        margin-top: -10px; 
        width: 100%;
        align-items: center;
    }

    .pagination-wrapper{
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
    }
    .wrapper-informations{
        position: fixed;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    } 

</style>
