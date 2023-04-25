<template>
    <div  class="wrapper" @mousemove="mouseMove()" @mouseout="mouseOut()">
        <div ref="elementRef" class="card">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import { useMouseInElement } from '@vueuse/core'

export default {
    name:'ParallaxCard', 
    props :{
        cardObject: Object
    },   
    setup() {
        const posX = ref(null)
        const posY = ref(null)
        const elementRef = ref(null)
        const {elementX, elementY, elementHeight, elementWidth} = useMouseInElement(elementRef)

        const mouseMove = () =>{           
            posX.value = (elementX.value - (elementWidth.value / 2)) / 6
            posY.value = -(elementY.value - (elementHeight.value / 2)) / 8
            elementRef.value.setAttribute('style',`transform: rotateX(${posY.value}deg) rotateY(${posX.value}deg);`)
        }

        const mouseOut = ()=>{
            setTimeout(() => {
                elementRef.value.setAttribute('style',`transform: rotateX(0deg) rotateY(0deg);`)
            }, 300);
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

<script setup>
    
</script>

<style>
    .wrapper{
        width: 300px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 600px;
        cursor: pointer;
        margin: 0 auto;
    }

    .card{
        width: 250px;
        height: 350px;
        position: relative;
        transition: .3s ease-out;
        transform-style: preserve-3d;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
