<template>
    <label class="search-by-name" for="search-by-name">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
            class="input"
            type="text" 
            id="search-by-name"
            placeholder="e.g. Pikachu"
            v-model="selectedByName"
            @input="updateselectedByName"
            />
    </label> 
</template>

<script setup>
    import { ref } from 'vue'

    const emit = defineEmits([
        'update:selectedByName'
    ])

    const selectedByName = ref('')

    const updateselectedByName = ()=>{
        emit('update:selectedByName', selectedByName.value)
    }

</script>

<style scoped> /* Search Name */
    .search-by-name{
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
        .input {
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

        .input:focus{
            outline: 2px solid var(--color-third);
        }
    
</style>