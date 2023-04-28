<template>
    <nav>
        <label class="search-name" for="search-name">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
            class="search-name-input"
            v-model="searchName"
            @change="$emit('changeSearchName', searchName)"
            id="search-name" 
            type="text" 
            placeholder="e.g. Pikachu"
            />
        </label> 

        <div class="filter-types">
            <label :for="element" v-for="element in types" :key="element" >
                <img :src="`../../public/types/${element}.png`" :alt="element">
                <p>{{ element }}</p>
                <input 
                type="checkbox" 
                name="type" 
                :id="element"
                :true-value="typeFilter"
                :false-value="typeFilter"
                @click="$emit('update:typeFilter', `${element}`)"
                />
            </label>
        </div>
    </nav>
</template>

<script>
    import { ref } from 'vue'
    import apiTCG from '@/services/apiTCG.js'

    export default {
        name: 'FilterMarket',
        props: {
            typeFilter: String
        },
        components:{
        }
        ,        
        emits: ['changeSearchName'],
        setup(){
            const types = ref([])
            const searchName = ref('')

            apiTCG.get('/types').then((response) => {
                types.value = response.data.data
            }); 

            return{
                types,
                searchName
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


</style>

