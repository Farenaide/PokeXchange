<template>
    <div class="filter-types">
        <div class="input-wrapper"
        @change="updateTypes"
        v-for="element in pokemonTypes" :key="element"> 
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
</template>

<script setup>
    import myData from '../services/myData';
    import { ref, watch } from 'vue'

    const selectedTypes = ref([])
    const pokemonTypes = myData.types

    const props = defineProps({
        selectedSupertype: String
    })    

    const emit = defineEmits([
        'update:selectedTypes'
    ])

    const updateTypes = ()=>{
        emit('update:selectedTypes', selectedTypes.value.join(' '))
    }

    watch(() => props.selectedSupertype,()=>{
        selectedTypes.value = []
        updateTypes()
    })

</script>

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