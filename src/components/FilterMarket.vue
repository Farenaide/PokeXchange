<template>
    <nav>
        <label class="search-name" for="search-name">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
            :value="searchName"
            @change="$emit('update:searchName', $event.target.value)"
            id="search-name" 
            type="text" 
            placeholder="e.g. Pikachu"
            />
        </label>  
    </nav>
</template>

<script>
    export default {
        name: 'FilterMarket',
        props: {
            searchName: String
        },
        emits: ['update:searchName']
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
        padding: 0 20px;
    }
    .fa-solid{
        margin-right: 10px;
        font-size: 20px;
        cursor: pointer;
    }
    input {
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
</style>

