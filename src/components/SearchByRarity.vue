<template>
    <div class="select-wrapper">
        <select v-model="selectedRarity" @change="updateSelectedRarity">
            <option value="*">All Rarities</option>
            <option 
            v-for="rarity in atualRarities" 
            :key="rarity" 
            :value="rarity"
            id="allOptions"
            >
                {{ rarity }}
            </option>
        </select>
    </div>
</template>

<script setup>
    import myData from '../services/myData'
    import { ref, watch } from 'vue'

    const emit = defineEmits([
        'update:selectedRarity'
    ])

    const props = defineProps({
        selectedSupertype: String
    })

    const pokemonRarities = myData.rarity.pokemonRarities
    const trainerRarities = myData.rarity.trainerRarities
    const energyRarities = myData.rarity.energyRarities
    const selectedRarity = ref('*')
    const atualRarities = ref(pokemonRarities)

    watch(() => props.selectedSupertype,()=>{
        selectedRarity.value = '*'
        updateSelectedRarity()
        switch (props.selectedSupertype) {
            case 'Pokémon':
                atualRarities.value = pokemonRarities
                break;
            case 'Trainer':
                atualRarities.value = trainerRarities
                break
            case 'Energy':
                atualRarities.value = energyRarities
                break
            default:
                break;
        }
    })

    const updateSelectedRarity = ()=>{
        emit('update:selectedRarity', selectedRarity.value)
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