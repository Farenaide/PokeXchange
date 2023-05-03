<template>
    <div class="parallax-wrapper" @mousemove="mouseMove()" @mouseout="mouseOut()">
        <div ref="elementRef" class="parallax-card"> 
            <img ref="reflexEffect" class="card-effect2" :src="coverEffect" alt="effect">
            <img ref="reflexEffect" class="card-effect" :src="reflexType" alt="effect">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'
    import { useMouseInElement } from '@vueuse/core'

    export default {
        name:'ParallaxCard',  
        props:{
            reflexTypeProp: {type:String, default:''}
        },
        setup(props) {
            const posX = ref(null)
            const posY = ref(null)
            const elementRef = ref(null)
            const reflexEffect = ref(null)
            const {elementX, elementY, elementHeight, elementWidth} = useMouseInElement(elementRef)
            const reflexType = ref('')
            const coverEffect = ref('')

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

            const mouseMove = () =>{           
                const intensity = (elementHeight.value * elementWidth.value)/ 19000
                posX.value = (elementX.value - (elementWidth.value / 2)) / intensity
                posY.value = -(elementY.value - (elementHeight.value / 2)) / intensity
                elementRef.value.setAttribute('style',`transform: rotateX(${posY.value}deg) rotateY(${posX.value}deg);`)
                reflexEffect.value.setAttribute('style',`transform: translateX(${posX.value * 5}px) translateY(${posY.value * 5}px);`)
            }

            const mouseOut = ()=>{
                elementRef.value.setAttribute('style',`transform: rotateX(0deg) rotateY(0deg);`)
                reflexEffect.value.setAttribute('style',`transform: translateX(0px) translateY(0px);`)
            }

            onMounted(()=>{                
                switch (true) {                    
                    case basicEffect.includes(props.reflexTypeProp):
                        reflexType.value = '/basicEffect.jpg' 
                    break;

                    case effectTwo.includes(props.reflexTypeProp):
                        reflexType.value = '/effectTwo.jpg'
                        coverEffect.value = '/particles1.gif'
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
            


            return {
                elementRef,
                reflexEffect,
                reflexType,
                coverEffect,
                posX,
                posY,
                mouseMove,
                mouseOut
            }
        },
    }
</script>

<style>
    .parallax-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 600px;
        cursor: pointer;
        margin: 0 auto;
        user-select: none;
    }

    .parallax-card{
        position: relative;
        transition: .3s ease-out;
        transform-style: preserve-3d;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 10px;
    }

    .card-effect{
        position: absolute;
        height: 500%;
        width: 500%;
        mix-blend-mode: overlay; 
        object-fit: cover;
        opacity: 1;
        pointer-events: none;
    }

    .card-effect2{
        position: absolute;
        height: 150%;
        width: 150%;
        mix-blend-mode: screen; 
        object-fit: cover;
        opacity: 1;
        pointer-events: none;
    }
</style>
