<template>
    <div class="parallax-wrapper" @mousemove="mouseMove()" @mouseout="mouseOut()">
        <div ref="elementRef" class="parallax-card"> 
            <img ref="holoEffect" class="card-effect" src="/HoloEffectJ.jpg" alt="effect">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import { useMouseInElement } from '@vueuse/core'

    export default {
        name:'ParallaxCard',   
        setup() {
            const posX = ref(null)
            const posY = ref(null)
            const elementRef = ref(null)
            const holoEffect = ref(null)
            const {elementX, elementY, elementHeight, elementWidth} = useMouseInElement(elementRef)

            const mouseMove = () =>{           
                const intensity = (elementHeight.value * elementWidth.value)/ 19000
                posX.value = (elementX.value - (elementWidth.value / 2)) / intensity
                posY.value = -(elementY.value - (elementHeight.value / 2)) / intensity
                elementRef.value.setAttribute('style',`transform: rotateX(${posY.value}deg) rotateY(${posX.value}deg);`)
                holoEffect.value.setAttribute('style',`transform: translateX(${posX.value * 5}px) translateY(${posY.value * 5}px);`)
            }

            const mouseOut = ()=>{
                elementRef.value.setAttribute('style',`transform: rotateX(0deg) rotateY(0deg);`)
                holoEffect.value.setAttribute('style',`transform: translateX(0px) translateY(0px);`)
            }

            return {
                elementRef,
                holoEffect,
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
    }
</style>
