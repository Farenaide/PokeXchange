<template>
    <header>
        <nav>            
            <RouterLink class="logo" to="/"><h1>PokeXchange</h1></RouterLink>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/market">Market</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <button>
                <div class="button">Connect Wallet</div>
                <span class="gradient"></span>
            </button>
        </nav>
    </header>
</template>

<script>
    export default{
        name:'NavBar'
    }
</script>

<style scoped>
    nav{
        max-width: 1440px;
        height: 120px;
        margin: 0 auto;
        font-weight: 300;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 85px;
    }
    .logo{
        font-family: var(--font-Noto-Sans);
        font-weight: 500;
        font-size: 40px;
        margin: auto;
        margin-left: 0;
    }

    button{
        --radius: 20px;
        position: relative;
        width: 190px;
        height: 50px;
        min-width: 190px;
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius);
        overflow: hidden; 
        cursor: pointer;
        transition: scale .1s linear;
        margin: 0 auto;
        margin-right: 8px;
    }

    .button{
        box-sizing: border-box;
        background-color: var(--color-first);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 99%;
        height: 96.5%;
        border-radius: var(--radius);
        position: absolute;
        z-index: 1;
        pointer-events: none;
        color: var(--color-white);
        font-size: 20px;
        font-family: var(--font-Roboto);
        font-weight: 300;
    }

    button:hover{
        scale: 1.05;
    }

    .gradient{
        box-sizing: border-box;
        display: block;
        background-image: linear-gradient(to right, var(--color-second), var(--color-third));
        width: 200px;
        height: 200px;
        margin: 0;
        padding: 0;
        position: absolute;
        transition: rotate 2s ease;
    }

    .gradient:hover{
        rotate: 720deg;
    }
    
</style>