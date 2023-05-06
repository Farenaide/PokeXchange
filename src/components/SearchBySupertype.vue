<template>
    <div class="supertypes-wrapper" @change="updateSelectedSupertype">
        <div v-for="supertype in allSupertypes" :key="supertype">
            <input class="search-supertype-input"
            type="radio" 
            name="superTypes" 
            :id="supertype" 
            :value="supertype" 
            v-model="selectedSupertype">
            <label :for="supertype">
                <div class="wrapper-border">
                    <img :src="`/${supertype}Select.png`" :alt="supertype">
                    <div :class="`${supertype} select`"></div>
                    <div :class="`${supertype}2 select2`"></div>
                </div>
            </label>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import myData from '../services/myData';

    const emit = defineEmits([
        'update:selectedSupertype'
    ])

    const updateSelectedSupertype=()=>{
        emit('update:selectedSupertype', selectedSupertype.value)
    }

    const allSupertypes = myData.supertypes
    const selectedSupertype = ref('Pokémon')
</script>

<style scoped> /* Supertype */
    .supertypes-wrapper{
            display: flex;
            margin-left: 0;
            cursor: pointer;
            width: 100%;
            gap: 10px;
    }
    .supertypes-wrapper label{
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