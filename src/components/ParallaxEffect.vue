<template>
    <div ref="target" class="target-style" @mouseleave="mouseLeave">
        <div class="container-style">
            <div ref="card" :style="cardStyle" class="card-style">
                <img class="layer-base" :src="props.srcImage" :alt="props.altImage">

                <img
                v-if="reflexType"
                :style="layer1" 
                class="layer-base layer1"
                :src="reflexType"
                alt="Default Card"
                >
                
                <img 
                v-if="particles"
                :style="layer2" 
                class="layer-base layer2"
                :src="particles" 
                alt="Particles"
                >
                
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, reactive, ref, onMounted } from 'vue'
    import { useParallax } from '@vueuse/core'

    const props = defineProps({
        srcImage: {type: String, default:'/loadingTCG.gif'},
        altImage: {type: String, default:'Loading Card'},
        srcEffect: {type: String, default:'/basicEffect.jpg'},
        reflexTypeProp: {type: String, default:'Common'},
    })

    const target = ref(null)
    const card = ref(null)
    const parallax = reactive(useParallax(target))
    const reflexType = ref(null)
    const particles = ref(null)

    const cardStyle = computed(() => ({
        transform: `rotateX(${parallax.roll * 40}deg) rotateY(${parallax.tilt * 40}deg)`,
    }))

    const layer1 = computed(() => ({
        transform: `translateX(${parallax.tilt * 120}px) translateY(${parallax.roll * 220}px) scale(5)`,
    }))

    const layer2 = computed(() => ({
        transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 15}px)`,
    }))

    const mouseLeave = ()=>{
        setTimeout(() => {
            card.value.style.transform =  `rotateX(0deg) rotateY(0deg)`
        }, 500);
    }

    onMounted(()=>{
        setTimeout(() => {
            card.value.style.transform =  `rotateX(0deg) rotateY(0deg)`
        }, 0);

        switch (true) {                    
            case basicEffect.includes(props.reflexTypeProp):
                reflexType.value = '/basicEffect.jpg' 
                
            break;

            case effectTwo.includes(props.reflexTypeProp):
                reflexType.value = '/effectTwo.jpg'
                particles.value = '/particles1.gif'
            break;

            case effectThree.includes(props.reflexTypeProp):
                reflexType.value = '/effectThree.jpg'
            break;

            case effectFour.includes(props.reflexTypeProp):
                reflexType.value = '/effectFour.jpg'
            break;
        
            default:
                reflexType.value = '/basicEffect.jpg'
                break;
        }
    })

    const basicEffect = [
        'Common',
        'Uncommon',
        'Rare Holo EX',
        'Rare Ultra',
        'Rare Holo GX',
        'Rare Holo LV.X',
        'Rare Prime',
        'Rare Holo V',
        'Rare Shiny',
        'Rare Shining',
        'Amazing Rare',
        'Rare Holo Star',
        'LEGEND',
        'Rare Holo',                
    ] 

    const effectTwo = [
        'Rare Holo VMAX',
        'Promo',
        'Rare ACE',
        'Rare Secret',
    ]

    const effectThree = [
        'Rare BREAK',
    ]

    const effectFour = [
        'Rare Rainbow'
    ]

</script>


<style scoped>
    .target-style{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin: auto;
        user-select: none;
        cursor: pointer;
        padding: 10px;

    }
    .container-style{
        perspective: 500px;
        border-radius: 15px;
        height: 100%;
        width: 100%;
    }
    .card-style{
        height: 100%;
        width: 100%;
        border-radius: 15px;
        transition: .45s cubic-bezier(.2,.49,.32,.99);
        overflow: hidden;
        user-select: none;
        background-color: black;
        box-shadow: 5px 5px 30px rgba(10, 14, 32, 0.781);
    }
    .layer-base{
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .layer1{
        mix-blend-mode: overlay;
        object-fit: cover;
        pointer-events: none;
    } 
    .layer2{
        height: 110%;
        width: 200%;
        object-fit: cover;
        mix-blend-mode: screen;
        pointer-events: none; 
    } 
</style>