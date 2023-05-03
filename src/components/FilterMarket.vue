<template>
    <nav>
        <label class="search-name" for="search-name">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
            class="search-name-input"
            v-model.trim="searchName"
            @input="$emit('changeSearchName', searchName)"
            id="search-name" 
            type="text" 
            placeholder="e.g. Pikachu"
            />
        </label> 

        <div class="filter-supertypes" 
        @change="[
            $emit('changeSuperType', selectedSuperType), 
            $emit('changeType', selectedTypes = []),
            $emit('changeSubtype', selectedSubtype = '*') ,
            $emit('changeSearchName', searchName = ''),
            $emit('changeHp', ''),
            $emit('changeRarity', selectedRarity = '*')
            ]"
        >
            <div v-for="supertype in allSuperTypes" :key="supertype">
                <input class="search-supertype-input"
                type="radio" 
                name="superTypes" 
                :id="supertype" 
                :value="supertype" 
                v-model="selectedSuperType">
                <label :for="supertype">
                    <div class="wrapper-border">
                        <img :src="`/${supertype}Select.png`" :alt="supertype">
                        <div :class="`${supertype} select`"></div>
                        <div :class="`${supertype}2 select2`"></div>
                    </div>
                </label>
            </div>
        </div>
        
        <div class="filter-select">
            <select v-model="selectedSubtype" @change="$emit('changeSubtype', selectedSubtype)">
                <option value="*">All Subtypes</option>
                <option 
                v-for="subtype in subtypes" 
                :key="subtype" 
                :value="subtype"
                id="allOptions"
                >
                    <div>{{ subtype }}</div>
                </option>
            </select>
        </div>

        <div class="filter-select">
            <select v-model="selectedRarity" @change="$emit('changeRarity', selectedRarity)">
                <option value="*">All Rarities</option>
                <option 
                v-for="Rarity in rarities" 
                :key="Rarity" 
                :value="Rarity"
                id="allOptions"
                >
                    <div>{{ Rarity }}</div>
                </option>
            </select>
        </div>

        <div class="filter-types"
        v-if="selectedSuperType === 'Pokémon'"
        @change="$emit('changeType', selectedTypes.join(' '))">
            <div class="input-wrapper"
            v-for="element in allTypes" :key="element"> 
                <input   
                    :class="`filter-${element}`"
                    :id="element"                 
                    type="checkbox"
                    name="type"
                    :value="`types:${element}`"
                    v-model="selectedTypes"
                    />
                <label :for="element" class="label-types">
                    <img :src="`/pokemonTypes/${element}.png`" :alt="element">
                    <p>{{ element }}</p>
                </label>
            </div>
        </div>
        
        <div class="filter-hp"
        v-if="(selectedSuperType === 'Trainer' || selectedSuperType === 'Pokémon')">
            <p>Min HP {{ sliderMin }}</p>
            <p>Max HP {{ sliderMax }}</p>
            <input 
            @input="$emit('changeHp', `hp:[${sliderMin} TO ${sliderMax}]`)"
            class="filter-min" type="range" :min="minHP" :max="maxHP" step="10" v-model="sliderMin"> 
            <input 
            @input="$emit('changeHp', `hp:[${sliderMin} TO ${sliderMax}]`)"
            class="filter-max" type="range" :min="minHP" :max="maxHP" step="10" v-model="sliderMax"> 
        </div>
    </nav>
</template>

<script>
    import { ref, watch } from 'vue'
    import myData from '../services/myData'

    export default {
        name: 'FilterMarket',        
        emits: [
            'changeSearchName', 
            'changeType',
            'changeSuperType',
            'changeSubtype',
            'changeHp',
            'changeRarity'
        ],
        setup(){
            const allTypes = myData.types
            const allSuperTypes = myData.supertypes
            const trainerSubtypes = myData.subtypes.trainerSubtypes
            const pokemonSubtypes = myData.subtypes.pokemonSubtypes
            const trainerRarities = myData.rarity.trainerRarities
            const energyRarities = myData.rarity.energyRarities
            const pokemonRarities = myData.rarity.pokemonRarities
            const energySubtypes = myData.subtypes.energySubtypes
            const subtypes = ref(pokemonSubtypes)
            const rarities = ref(pokemonRarities)


            const maxHP = ref(340)
            const minHP = ref(0)

            const searchName = ref('')
            const selectedTypes = ref([])
            const selectedSubtype = ref('*')
            const selectedSuperType = ref('Pokémon')
            const selectedRarity = ref('*')
            const sliderMin = ref(minHP.value)
            const sliderMax = ref(maxHP.value)

            watch([sliderMax, sliderMin], (NewValue) => {
                if (NewValue[1] >= sliderMax.value){
                    if(NewValue[1] == maxHP.value || NewValue[1] == minHP.value){
                        sliderMax.value = Number(NewValue[1])
                    }else {
                        sliderMax.value = Number(NewValue[1])
                    }                  
                }
                if (NewValue[0] <= (sliderMin.value)) {
                    if(NewValue[1] == maxHP.value || NewValue[1] == minHP.value){
                        sliderMin.value = Number(NewValue[0])
                    }else {
                        sliderMin.value = Number(NewValue[0])
                    }
                } 
            });

            watch(selectedSuperType,()=>{
                switch (selectedSuperType.value) {
                    case 'Pokémon':
                        subtypes.value = pokemonSubtypes
                        rarities.value = pokemonRarities
                        sliderMax.value = maxHP.value = 340
                        sliderMin.value = 0
                        break;
                    case 'Trainer':
                        rarities.value = trainerRarities
                        subtypes.value = trainerSubtypes
                        sliderMax.value = maxHP.value = 60 
                        sliderMin.value = 0
                        break
                    case 'Energy':
                        rarities.value = energyRarities
                        subtypes.value = energySubtypes
                        break
                    default:
                        break;
                }
            })

            return{
                allTypes,
                allSuperTypes,
                subtypes,
                searchName,
                selectedTypes,
                selectedSubtype,
                selectedSuperType,
                selectedRarity,
                sliderMin,
                sliderMax,
                maxHP,
                minHP,
                rarities
            }
        }
    }
</script>

<style scoped> /* NAV */
    nav{
        box-sizing: border-box;
        max-width: 380px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 20px;
        height: 85vh;
    }


</style>

<style scoped> /* Filter Select */
    .filter-select{
        box-sizing: border-box;
        margin-top: 20px;
        width: 100%;
        height: 40px;
        position: relative;
    }

    .filter-select::after{
        content: '\25B8';
        display: block;
        height: 50%;
        position: absolute;
        right: 10px;
        top: 25%;
        rotate: 90deg;
        pointer-events: none;
    }
    .filter-select select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        color: var(--color-white);
        padding: 0 10px;
        cursor: pointer;
        background: var(--color-first--variant);
        user-select: none;
        border: 1px solid var(--color-white);
    }
    .filter-select select:focus {
        outline: none;
        border: none;
        border: 2px solid var(--color-third);
        
    }

</style>

<style scoped> /* Search Name */
    .search-name{
            box-sizing: border-box;
            display: flex;
            align-items: center;
            height: 40px;
            width: 100%;
            position: relative;
            border: 1px solid var(--color-white);
        }
        .fa-solid{
            margin-right: 10px;
            font-size: 20px;
            cursor: pointer;
            position: absolute;
            left: 10px;
        }
        .search-name-input {
            flex-grow: 1;        
            box-sizing: border-box;
            outline: none;
            border: none;
            width: 0;
            min-width: 100px;
            height: 100%;
            background-color: var(--color-first--variant);
            padding: 0 15px;
            padding-left: 40px;
            color: var(--color-white);
        }

        .search-name-input:focus{
            outline: 2px solid var(--color-third);
        }
    
</style>

<style scoped> /* Supertype */
    .filter-supertypes{
            display: flex;
            margin: 20px auto 0;
            margin-left: 0;
            cursor: pointer;
            width: 100%;
            gap: 10px;
        }
    .filter-supertypes label{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .search-supertype-input{
        display: none;
    }
    .wrapper-border{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
        padding: 5px;
    }
    .wrapper-border img{
        width: 100%;
        height: 100%;
    }

    .search-supertype-input:checked + label .select:before,
    .search-supertype-input:checked + label .select:after,
    .search-supertype-input:checked + label .select2:before,
    .search-supertype-input:checked + label .select2:after{
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
    }

    #Pokémon:checked + label .Pokémon:before {
        top: 0;
        left: 0;
        border-top: 2px solid;
        border-left: 2px solid;
        border-color: #e5961d;
    }
    #Pokémon:checked + label .Pokémon::after {
        bottom: 0;
        left: 0;
        border-bottom: 2px solid;
        border-left: 2px solid;
        border-color: #e5961d;
    }
    #Pokémon:checked + label .Pokémon2:before {
        top: 0;
        right: 0;
        border-top: 2px solid;
        border-right: 2px solid;
        border-color: #e5961d;
    }
    #Pokémon:checked + label .Pokémon2:after {
        bottom: 0;
        right: 0;
        border-bottom: 2px solid;
        border-right: 2px solid;
        border-color: #e5961d;
    }

    #Trainer:checked + label .Trainer:before {
        top: 0;
        left: 0;
        border-top: 2px solid;
        border-left: 2px solid;
        border-color: #cdbf9a;
    }
    #Trainer:checked + label .Trainer::after {
        bottom: 0;
        left: 0;
        border-bottom: 2px solid;
        border-left: 2px solid;
        border-color: #cdbf9a;
    }
    #Trainer:checked + label .Trainer2:before {
        top: 0;
        right: 0;
        border-top: 2px solid;
        border-right: 2px solid;
        border-color: #cdbf9a;
    }
    #Trainer:checked + label .Trainer2:after {
        bottom: 0;
        right: 0;
        border-bottom: 2px solid;
        border-right: 2px solid;
        border-color: #cdbf9a;
    }

    #Energy:checked + label .Energy:before {
        top: 0;
        left: 0;
        border-top: 2px solid;
        border-left: 2px solid;
        border-color: #f5f5f7;
    }
    #Energy:checked + label .Energy::after {
        bottom: 0;
        left: 0;
        border-bottom: 2px solid;
        border-left: 2px solid;
        border-color: #f5f5f7;
    }
    #Energy:checked + label .Energy2:before {
        top: 0;
        right: 0;
        border-top: 2px solid;
        border-right: 2px solid;
        border-color: #f5f5f7;
    }
    #Energy:checked + label .Energy2:after {
        bottom: 0;
        right: 0;
        border-bottom: 2px solid;
        border-right: 2px solid;
        border-color: #f5f5f7;
    }
</style>

<style scoped> /* Types */
        .label-types img {
        width: 15px;
        filter: brightness(1.5);
        margin-right: 5px;
    }
    .filter-types{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
    }

    .input-wrapper{
        flex-grow: 1;
    }
    .input-wrapper input{
        display: none;
    }
    .input-wrapper label{
        display: flex;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 5px;
        background-color: var(--color-first--variant);
        border-radius: 8px;
    }
    .filter-Colorless + label{
        color: #fff;
    }
    .filter-Colorless:checked + label{
        outline: 1px solid #fff;
        filter: contrast(1.2);
    }

    .filter-Darkness + label{
        color: #689ac6;
    }
    .filter-Darkness:checked + label{
        outline: 1px solid #689ac6;
        filter: contrast(1.2);
    }

    .filter-Dragon + label{
        color: #f3d443;
    }
    .filter-Dragon:checked + label{
        outline: 1px solid #f3d443;
        filter: contrast(1.2);
    }

    .filter-Fairy + label{
        color: #fc8cdf;
    }
    .filter-Fairy:checked + label{
        outline: 1px solid #fc8cdf;
        filter: contrast(1.2);
    }

    .filter-Fighting + label{
        color: #ee4f30;
    }
    .filter-Fighting:checked + label{
        outline: 1px solid #ee4f30;
        filter: contrast(1.2);
    }

    .filter-Fire + label{
        color: #f1353d;
    }
    .filter-Fire:checked + label{
        outline: 1px solid #f1353d;
        filter: contrast(1.2);
    }

    .filter-Grass + label{
        color: #48b769;
    }
    .filter-Grass:checked + label{
        outline: 1px solid #48b769;
        filter: contrast(1.2);
    }

    .filter-Lightning + label{
        color: #fcfe6a;
    }
    .filter-Lightning:checked + label{
        outline: 1px solid #fcfe6a;
        filter: contrast(1.2);
    }

    .filter-Metal + label{
        color: #d6dce7;
    }
    .filter-Metal:checked + label{
        outline: 1px solid #d6dce7;
        filter: contrast(1.2);
    }

    .filter-Psychic + label{
        color: #c770cd;
    }
    .filter-Psychic:checked + label{
        outline: 1px solid #c770cd;
        filter: contrast(1.2);
    }

    .filter-Water + label{
        color: #27ffff;
    }
    .filter-Water:checked + label{
        outline: 1px solid #27ffff;
        filter: contrast(1.2);
    }
    
</style>

<style scoped> /* HealthPoints */
    .filter-hp{
        margin-top: 20px;
        width: 100%;
        position: relative;
        display: flex;
    }
    .filter-hp p {
        width: 100%;
        color: var(--color-second);
    }
    .filter-hp p:nth-child(2){
        text-align: end;
        color: var(--color-third);
    }
    .filter-hp input{
        -webkit-appearance: none;  
        appearance: none;
        width: 100%; 
        height: 10px; 
        background: #1c1c36; 
        border-radius: 5px;
        position: absolute;
        pointer-events: none;
        opacity: 1;
        top: 20px;
    }
    .filter-hp input:focus{
        outline: none;
    }
    .filter-hp .filter-min{
        width: 92%;
    }

    .filter-hp .filter-max{
        width: 92%;
        right: 0;
    }
    .filter-hp input::-webkit-slider-thumb {
        -webkit-appearance: none; 
        appearance: none;
        width: 15px; 
        height: 15px; 
        background: var(--color-third); 
        filter: opacity(.7);
        cursor: pointer;
        border-radius: 50%;
        -webkit-transition: .1s; 
        transition: border .1s;
        position: relative;
        z-index: 1;
        outline: 2px solid var(--color-first);
        pointer-events: all;
    }

    .filter-hp .filter-min::-webkit-slider-thumb{
        background-color: var(--color-second);
    }

    .filter-hp input::-webkit-slider-thumb:hover {
        filter: opacity(1); 
        scale: 1.1; 
    }



</style>
