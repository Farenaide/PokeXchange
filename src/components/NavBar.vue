<template>
    <header>
        <nav>            
            <RouterLink class="logo" to="/"><h1>
                <span class="poke">Poke</span>X<span class="change">change</span>
            </h1></RouterLink>
            <RouterLink class="menu-hover" to="/">Home</RouterLink>
            <RouterLink class="menu-hover menu-hover--variation" to="/market">Market</RouterLink>
            <RouterLink class="menu-hover" to="/about">About</RouterLink>
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
        margin-left: 20px;
    }

    .menu-hover{
        position: relative;
    }

    .menu-hover::after{
        content: '';
        display: block;
        width: 0%;
        height: 2px;
        margin-top: 3px;
        left: 50%;
        background-color: transparent;
        position: absolute;
        transition: all .2s ease-in-out;
        transform: translateX(-50%);
    }

    .menu-hover:hover::after{
        width: 100%;
        background-color: var(--color-second);
        transform: translateX(-50%);
    }

    .menu-hover--variation:hover::after{
        background-color: var(--color-third);
    }

    button{
        --radius: 15px;
        position: relative;
        width: 191px;
        height: 51px;
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
        margin-right: 28px;
    }
    .button{
        box-sizing: border-box;
        background-color: var(--color-first);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 98%;
        height: 96%;
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

    .poke{
        color: var(--color-second);        
    }
    .change{
        color: var(--color-third);
    }
</style>