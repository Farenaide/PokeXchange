<template>
    <nav>
        <label class="search-name" for="search-name">
            <i class="fa-solid fa-magnifying-glass" @click="$emit('changeSearchName', searchName)"></i>
            <input
            class="search-name-input"
            v-model="searchName"
            @keyup.enter="$emit('changeSearchName', searchName)"
            id="search-name" 
            type="text" 
            placeholder="e.g. Pikachu"
            />
        </label> 

        <div class="filter-types" @change="$emit('changeType', strSelectedTypes)">
            <label :for="element" v-for="element in allTypes" :key="element" >
                <img :src="`/pokemonTypes/${element}.png`" :alt="element">
                <p>{{ element }}</p>
                <input 
                class="type-checkbox"
                type="checkbox" 
                name="type" 
                :id="element"
                :value="`types:${element}`"
                v-model="selectedTypes"
                @change="concatTypes"
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
        ],
        setup(){
            const allTypes = myData.types

            const searchName = ref('')
            const selectedTypes = ref([])
            const strSelectedTypes = ref('')
            
            const concatTypes = ()=>{
                strSelectedTypes.value = selectedTypes.value.join(' ')
            }
            
            return{
                allTypes,
                searchName,
                selectedTypes,
                strSelectedTypes,
                concatTypes
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

</style>

