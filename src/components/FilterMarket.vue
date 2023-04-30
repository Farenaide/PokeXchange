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
            changeSubtypeOptions()
            ]"
        >
            <label v-for="supertype in allSuperTypes" :key="supertype">
                <input class="search-supertype-input"
                type="radio" 
                name="superTypes" 
                :id="supertype" 
                :value="supertype" 
                v-model="selectedSuperType">
                <p>{{ supertype }}</p>
            </label>
        </div>
        
        <div class="filter-subtypes">
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

        <div v-if="selectedSuperType === 'Pokémon'" 
            class="filter-types" 
            @change="$emit('changeType', selectedTypes.join(' '))
        ">
            <label :for="element" v-for="element in allTypes" :key="element" >
                <img :src="`public/pokemonTypes/${element}.png`" :alt="element">
                <p>{{ element }}</p>
                <input 
                class="type-checkbox"
                type="checkbox" 
                name="type" 
                :id="element"
                :value="`types:${element}`"
                v-model="selectedTypes"
                />
            </label>
        </div>
    </nav>
</template>

<script>
    import { ref } from 'vue'
    import myData from '../services/myData'

    export default {
        name: 'FilterMarket',        
        emits: [
            'changeSearchName', 
            'changeType',
            'changeSuperType',
            'changeSubtype'
        ],
        setup(){
            const allTypes = myData.types
            const allSuperTypes = myData.supertypes
            const trainerSubtypes = myData.subtypes.trainerSubtypes
            const pokemonSubtypes = myData.subtypes.pokemonSubtypes
            const energySubtypes = myData.subtypes.energySubtypes
            const subtypes = ref(pokemonSubtypes)

            const searchName = ref('')
            const selectedTypes = ref([])
            const selectedSubtype = ref('*')
            const selectedSuperType = ref('Pokémon')

            const changeSubtypeOptions = ()=>{
                switch (selectedSuperType.value) {
                    case 'Pokémon':
                        subtypes.value = pokemonSubtypes
                        break;
                    case 'Trainer':
                        subtypes.value = trainerSubtypes
                        break
                    case 'Energy':
                        subtypes.value = energySubtypes
                        break
                    default:
                        break;
                }
            }
            
            return{
                allTypes,
                allSuperTypes,
                subtypes,
                searchName,
                selectedTypes,
                selectedSubtype,
                selectedSuperType,
                changeSubtypeOptions
            }
        }
    }
</script>

<style scoped>
    nav{
        box-sizing: border-box;
        max-width: 380px;
        border: 1px dotted red;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 20px;
        height: 85vh;
    }

    .search-name{
        display: flex;
        align-items: center;
        height: 30px;
        width: 100%;
        border: 1px dotted red;
    }
    .fa-solid{
        margin-right: 10px;
        font-size: 20px;
        cursor: pointer;
    }
    .search-name-input {
        flex-grow: 1;        
        box-sizing: border-box;
        outline: none;
        border: none;
        width: 0;
        min-width: 100px;
        border-radius: 15px;
        height: 30px;
        background-color: var(--color-white-alpha);
        padding: 0 15px;
        color: var(--color-white);
    }
    .filter-types{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 5px;
        border: 1px dotted red;
        box-sizing: border-box;
        margin: 30px auto 0;
    }
    .filter-types label{
        display: flex;
        width: 110px;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        font-family: var(--font-Roboto);
        font-weight: 500;
        cursor: pointer;
        margin: 0 auto;
    }
    .filter-types label img {
        height: 15px;
        margin-right: 5px;
    }

    .type-checkbox{
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 15px;
        width: 15px;
        border-radius: 4px;
        background-color: var(--color-white);
        cursor: pointer;
    }
    .type-checkbox:checked{
        background-color: var(--color-third);
    }
    .filter-supertypes{
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 20px auto 0;
        margin-left: 0;
        cursor: pointer;
    }

    .filter-supertypes label{
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .search-supertype-input{
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        margin: 0;
        margin-right: 5px;
        margin-bottom: 2px;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: var(--color-white);
        cursor: pointer;
    }
    .search-supertype-input:checked{
        background-color: var(--color-third);
    }

    .filter-subtypes{
        box-sizing: border-box;
        margin-top: 20px;
        width: 100%;
        height: 40px;
        position: relative;
    }

    .filter-subtypes::after{
        content: '\25B8';
        display: block;
        height: 50%;
        position: absolute;
        right: 10px;
        top: 25%;
        rotate: 90deg;
    }
    .filter-subtypes select {
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
    }

    .filter-subtypes select:focus {
        outline: none;
        border: none;
        border: 2px solid var(--color-third);
        
    }

</style>

