<template>
    <div  class="parallax-wrapper" @mousemove="mouseMove()" @mouseout="mouseOut()">
        <div ref="elementRef" class="parallax-card">
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
        const {elementX, elementY, elementHeight, elementWidth} = useMouseInElement(elementRef)
        const mouseMove = () =>{           
            const intensity = (elementHeight.value * elementWidth.value)/ 19000
            posX.value = (elementX.value - (elementWidth.value / 2)) / intensity
            posY.value = -(elementY.value - (elementHeight.value / 2)) / intensity
            elementRef.value.setAttribute('style',`transform: rotateX(${posY.value}deg) rotateY(${posX.value}deg);`)
        }

        const mouseOut = ()=>{
            setTimeout(() => {
                elementRef.value.setAttribute('style',`transform: rotateX(0deg) rotateY(0deg);`)
            }, 500);
        }

        return {
            elementRef,
            posX,
            posY,
            mouseMove,
            mouseOut,
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
        width: 100%;
        height: 100%;
        position: relative;
        transition: .3s ease-out;
        transform-style: preserve-3d;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
