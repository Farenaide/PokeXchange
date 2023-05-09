<template>
    <div class="select-wrapper">
        <select v-model="selectedSubtype" @change="updateSelectedSubtype">
            <option value="*">All Subtypes</option>
            <option 
            v-for="subtype in atualSubtypes" 
            :key="subtype" 
            :value="subtype"
            id="allOptions"
            >
                {{ subtype }}
            </option>
        </select>
    </div>
</template>

<script setup>
    import myData from '../services/myData'
    import { ref, watch } from 'vue'

    const emit = defineEmits([
        'update:selectedSubtype'
    ])

    const props = defineProps({
        selectedSupertype: String
    })

    const pokemonSubtypes = myData.subtypes.pokemonSubtypes
    const trainerSubtypes = myData.subtypes.trainerSubtypes
    const energySubtypes = myData.subtypes.energySubtypes
    const selectedSubtype = ref('*')
    const atualSubtypes = ref(pokemonSubtypes)

    watch(() => props.selectedSupertype,()=>{
        selectedSubtype.value = '*'
        updateSelectedSubtype()
        switch (props.selectedSupertype) {
            case 'Pokémon':
                atualSubtypes.value = pokemonSubtypes
                break;
            case 'Trainer':
                atualSubtypes.value = trainerSubtypes
                break
            case 'Energy':
                atualSubtypes.value = energySubtypes
                break
            default:
                break;
        }
    })

    const updateSelectedSubtype = ()=>{
        emit('update:selectedSubtype', selectedSubtype.value)
    }

</script>

<style scoped> 
    .select-wrapper{
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        position: relative;
        mix-blend-mode: screen;
    }

    .select-wrapper::after{
        content: '\25B8';
        display: block;
        height: 50%;
        position: absolute;
        right: 10px;
        top: 25%;
        rotate: 90deg;
        pointer-events: none;
        
    }
    .select-wrapper select {
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
    .select-wrapper select:focus {
        outline: none;
        border: none;
        border: 2px solid var(--color-third);
    }

</style>