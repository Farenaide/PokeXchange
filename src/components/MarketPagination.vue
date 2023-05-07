<template>
    <div class="pagination-wrapper">
        <button @click="previousPage" :disabled="currentPage === 1">
            <i  :class="['fa-solid fa-play fa-flip-horizontal', { 'disabled' : currentPage === 1 }]" title="Previous Page"></i>
        </button>
        Page 
        <input 
            type="number" 
            min="1" 
            :max="props.setTotalPages" 
            class="page-input" 
            :value="currentPage" 
            @input="changeCurrentPage"
            @blur="focusOut"
        >
        of {{ props.setTotalPages }}
        <button @click="nextPage" :disabled="currentPage === props.setTotalPages">
            <i :class="['fa-solid fa-play',  { 'disabled' : currentPage === props.setTotalPages }]" title="Next Page"></i>
        </button>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'
    const currentPage = ref(1)
    
    const emit = defineEmits([
        'update:currentPage'
    ])

    const props = defineProps({
        setTotalPages: Number,
        selectedSupertype: String
    })

    const updateCurrentPage = ()=>{
        emit('update:currentPage', currentPage.value)
    }

    const nextPage = ()=>{
        currentPage.value++
    }
    const previousPage = ()=>{
        currentPage.value--
    }

    watch(currentPage, ()=>{
        if(currentPage.value > props.setTotalPages){
            currentPage.value = props.setTotalPages
        }
        if(currentPage.value < 0){
            currentPage.value = 1
        }
        updateCurrentPage()
    })

    const focusOut = ()=>{
        if(isNaN(currentPage.value) || currentPage.value == 0){
            currentPage.value = 1
        }
        updateCurrentPage()
    }

    const changeCurrentPage = (event)=>{
        currentPage.value = Number(event.target.value)
        updateCurrentPage()
    }

    watch(() => props.selectedSupertype,()=>{
        currentPage.value = 1
    })

</script>

<style scoped>
    .pagination-wrapper{
        display: flex;
        align-items: center;
        font-size: 20px;
        gap: 10px;
        width: 225px;
    }

    button{
        background: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }

    .fa-play{
        color: var(--color-third);
        font-size: 20px;
    }
    
    .page-input{
        display: inline;
        background: transparent;
        padding: 5px;
        color: var(--corlor-white);
        font-family: var(--font-Roboto);
        font-size: 20px;
        border: none;
        border-bottom: 2px solid var(--color-third);
        width: 40px;
        text-align: center;
    }

    .page-input:focus{
        outline: none;
        border-color: var(--color-second);
    }

    .disabled{
        color: var(--color-second);
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    }

</style>