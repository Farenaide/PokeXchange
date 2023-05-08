<template>
    <header>
        <nav>            
            <RouterLink class="nav-logo" to="/">
                <img src="/pokeXchangeLogo.png" alt="PokeXChange Logo">
                <h1><span class="nav-poke">Poke</span>X<br><span class="nav-change">change</span></h1>
            </RouterLink>
            <RouterLink class="nav-menu-hover" to="/">Home</RouterLink>
            <RouterLink class="nav-menu-hover menu-hover--variation" to="/market">Market</RouterLink>
            <RouterLink class="nav-menu-hover" to="/about">About</RouterLink>
            <button>
                <div class="nav-button">Connect Wallet</div>
                <span class="nav-gradient"></span>
            </button>
        </nav>
    </header>
</template>

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

    .nav-logo{
        margin: 0 auto;
        margin-left: 0;
        display: flex;
        align-items: center;
        gap: 10px;
        user-select: none;
    }
    .nav-logo img{
        height: 120px;
    }

    .nav-poke{
        color: var(--color-second);        
    }
    .nav-change{
        color: var(--color-third);
        margin-left: -10px;
    }

    h1{
        margin-top: 30px;
        font-family: var(--font-Noto-Sans);
        font-weight: 800;
        font-size: 40px;
        line-height: 23px;
    }

    .nav-menu-hover{
        position: relative;
    }

    .nav-menu-hover::after{
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

    .nav-menu-hover:hover::after{
        width: 100%;
        background-color: var(--color-second);
        transform: translateX(-50%);
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
        mix-blend-mode: lighten;
    }
    .nav-button{
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

    .nav-gradient{
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

    .nav-gradient:hover{
        rotate: 720deg;
    }

</style>