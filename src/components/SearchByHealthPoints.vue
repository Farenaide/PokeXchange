<template>
    <div :class="['search-hp-bar', {checked: isChecked}]">
        <div class="toggle-HP">
            <input type="checkbox" id="toggle" :checked="isChecked" v-model="isChecked" >
            <label v-if="isChecked" for="toggle">HP ON</label>
            <label v-else for="toggle">HP OFF</label>
        </div>

        <div class="sliders-wrapper" v-if="isChecked">
            <div class="p-wrapper">
                <p>Min {{ sliderMin }}</p>
                <p>Max {{ sliderMax }}</p>
            </div>
            <div class="input-wrapper">
                <input
                    @input="updateHealthPoints"
                    class="filter-min"
                    type="range"
                    :min="minHP"
                    :max="maxHP"
                    step="10"
                    v-model="sliderMin"
                >
                <input
                    @input="updateHealthPoints"
                    class="filter-max"
                    type="range"
                    :min="minHP"
                    :max="maxHP"
                    step="10"
                    v-model="sliderMax"
                >
            </div>
        </div>
    </div>
</template>

<script setup>

    import { ref, watch } from 'vue'

    const maxHP = ref(340)
    const minHP = ref(30)
    const sliderMin = ref(minHP.value)
    const sliderMax = ref(maxHP.value)
    const isChecked = ref(false)

    const strHealthPoints = ref('')

    const resetHP =()=>{
        emit('update:healthPoints', strHealthPoints.value = '')
    }
    const props = defineProps({
        selectedSupertype: String
    })

    const emit = defineEmits([ 
        'update:healthPoints',
    ])

    const updateHealthPoints = ()=>{
        strHealthPoints.value = `hp:[ ${sliderMin.value} TO ${sliderMax.value}]`
        emit('update:healthPoints', strHealthPoints.value)
    }

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

    watch(() => props.selectedSupertype,()=>{
        switch (props.selectedSupertype) {
            case 'Pokémon':
                sliderMin.value = minHP.value = 30
                sliderMax.value = maxHP.value = 340
                updateHealthPoints()
                break;
            case 'Trainer':
                sliderMin.value = minHP.value = 0
                sliderMax.value = maxHP.value = 60
                updateHealthPoints()
                resetHP()
                isChecked.value = false
                break;
            case 'Energy':
                resetHP()
            break;
            default:
                break;
        }
    })

    watch(isChecked, ()=>{
        if(isChecked.value){
            sliderMin.value = minHP.value
            sliderMax.value = maxHP.value
            updateHealthPoints()
        } else{
            resetHP()
        }
    })

</script>

<style scoped>
    .input-wrapper{
        width: 100%;
        position: relative;
        margin-bottom: 10px;
    }

    .sliders-wrapper{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
    }

    .p-wrapper{
        display: flex;
    }

    .search-hp-bar{
        width: 100%;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        border: 2px solid var(--color-second);
        background-color: var(--color-first--variant);
        border-radius: 10px;
        mix-blend-mode: screen;
    }

    .checked{
        border: 2px solid var(--color-third);
    }
    .search-hp-bar p {
        width: 100%;
        color: var(--color-second);
    }
    .search-hp-bar p:nth-child(2){
        text-align: end;
        color: var(--color-third);
    }
    .search-hp-bar .input-wrapper input{
        -webkit-appearance: none;  
        appearance: none;
        width: 92%; 
        height: 10px; 
        background: #302c3b; 
        border-radius: 5px;
        position: absolute;
        pointer-events: none;
        opacity: 1;

    }
    .search-hp-bar .input-wrapper input:focus{
        outline: none;
    }
    .search-hp-bar .filter-min{
        width: 92%;
    }

    .search-hp-bar .filter-max{
        width: 92%;
        right: 0;
    }
    .search-hp-bar .input-wrapper input::-webkit-slider-thumb {
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

    .search-hp-bar .input-wrapper .filter-min::-webkit-slider-thumb{
        background-color: var(--color-second);
    }

    .search-hp-bar .input-wrapper input::-webkit-slider-thumb:hover {
        filter: opacity(1); 
        scale: 1.1; 
    }

    .toggle-HP{
        display: flex;
        align-items: center;
        color: var(--color-second);
        padding: 10px;

    }
    .toggle-HP input{
        -webkit-appearance: none; 
        appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid var(--color-second);
        cursor: pointer;
    }

    .toggle-HP label{
        cursor: pointer;
        font-weight: 700;
        width: 100%;
    }
    .toggle-HP input:checked{
        border-color: var(--color-third);
    } 
    .toggle-HP input:checked + label {
        color: var(--color-third);
    }
    .toggle-HP input:checked::after{
        content: '\2713';
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-third);
        font-weight: bolder;
        margin-top: -1px;
    }

</style>