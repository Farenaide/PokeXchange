<template>
        <ul>
            <div class="not-found" v-if="dataCards.length == 0">
                <h3>No cards matches your filter</h3>
                <img src="/pikachunotfound.png" alt="Card not found">
            </div>
            <li v-for="card in dataCards" :key="card.cardId">
                <ParallaxCard  :reflexTypeProp="card.cardRarity">
                    <img class="load" :src="card.cardImage" :alt="card.cardName">
                </ParallaxCard>
            </li>
        </ul>
</template>

<script>
    import apiTCG from '@/services/apiTCG.js'
    import ParallaxCard from './ParallaxCard.vue';
    import { ref, onMounted, defineEmits } from 'vue'

    export default {
    name: "SpreadCards",
    components: {
        ParallaxCard,
    },
    props: {
        PageSize: { type: Number, default: 0 },
        PageNumber: { type: Number, default: 0 },
        Name: { type: String, default: '' },
        ImageSize: { type: String, default: 'small' },
        SelectedTypes: { default: '' },
        SelectedSuperType: { type: String, default: '*' },
        SelectedSubtypes: { type: String, default: '*' },
        SelectedHealthPoints: { type: String, default: '' },
        SelectedRarity: { type: String, default: '*' }
    },
    setup(props, { emit }) {

        const dataCards = ref([]);

        const createLoading = (size) => {
            dataCards.value = []
            if (size > 0) {
                for (let index = 0; index < size; index++) {
                dataCards.value.push({
                    cardId: `${index}`,
                    cardName: 'Default Card',
                    cardImage: '/loadingTCG.gif',
                    cardRarity: 'Common'
                })
                }
            }
        }
        createLoading(props.PageSize)

        const maxPages = ref('')
        const emitMaxPages = () => {
            emit('max-pages', maxPages);
        }

        defineEmits(['max-pages']);

        onMounted(() => {
        apiTCG.get('/cards', {
            params: {
            pageSize: props.PageSize,
            page: props.PageNumber,
            q: `name:"${props.Name}*" subtypes:"${props.SelectedSubtypes}" ${props.SelectedTypes} supertype:"${props.SelectedSuperType}" rarity:"${props.SelectedRarity}" ${props.SelectedHealthPoints}`,
            }
        }).then((response) => {
            maxPages.value = Math.ceil((response.data.totalCount / response.data.pageSize))
            emitMaxPages()
            createLoading(response.data.data.length)
            response.data.data.map((card, index) => {
            dataCards.value.splice(index, 1, {
                cardId: card.id,
                cardName: card.name,
                cardImage: card.images[`${props.ImageSize}`],
                cardRarity: card.rarity,
            })
            dataCards.value.unshift();
            });
        });

        })

        return {
            dataCards,
            maxPages
        };
    }
    }
</script>


<style>
    ul{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        column-gap: 10px;
        row-gap: 45px;
        position: relative;        
    }
    
    .not-found{
        height: 500px;
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 70px;
        font-family: var(--font-Noto-Sans);
        color: var(--color-fourth);
        text-align: center;
        font-size: 50px;
        font-weight: 900;
        grid-column: 1/4;
    }

    .load {
        height: 350px;
        object-fit: cover;
    }   
</style>