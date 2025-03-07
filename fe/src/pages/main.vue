<script>
import { useRouter } from 'vue-router'

export default { 
    setup() { 
        const router = useRouter() 

        return {
            router 
        }
    }
}
</script>


<template> 
    <div class='card'>
        <div class='card_glow'></div>
        <div class='border_glow'></div>
        <div class='card_title'>Developer &#183; Designer &#183; Software Engineer</div>
        <div class='card_body'>Hi! My name is Chase. I am a Software Engineer passionate about creating great user experiences.<br><br> My favorite type of work is creating tools, data pipelines, clis and complex systems.<br><br> My mission is to expand my skillset, and solve challenging problems with others. I am always open to network with other developers.<br><br>
        </div>
    </div>


</template> 

<style>
    .card { 
        display: flex; 
        flex-direction: column; 
        isolation: isolate; 
        position: relative;
        justify-self: center; 
        margin-top: 10rem; 
        width: 30rem; 
        height: 15rem; 
        background: #29292c; 
        border-radius: 1rem; 
        overflow: hidden; 
        font-family: Verdana, Geneva, Tahoma, sans-serif; 
        font-size: 16px;
        --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff); 
        --color: #32a6ff
    }

    .card:before {
        position: absolute; 
        content: ""; 
        inset: 0.0625rem; 
        border-radius: 0.9375rem; 
        background: #18181b; 
        z-index: 2
    }

    .card:after { 
        position: absolute; 
        content: "";
        width: 0.35rem; 
        inset: 0.65rem auto 0.65rem 0.75rem; 
        border-radius: 0.125rem; 
        background: var(--gradient); 
        transition: transform 300ms ease; 
        z-index: 4; 
    }

    .card:hover:after {
        transform: translateX(0.15rem)
    }

    .card_title { 
        color: var(--color); 
        padding: 0rem 0.25rem 0.6rem 0.75rem; 
        font-weight: 500; 
        font-size: 0.9rem; 
        transition: transfrom 300ms ease-out; 
        z-index: 5; 
    }

    .card:hover .card_title  {
        transform: translateX(0.15rem)
    }

    .card_body { 
        color: #e8e8e8; 
        padding: 0 1.25rem; 
        transition: transform 300ms ease; 
        z-index: 5; 
        margin: 1rem 0 1rem 0.5rem; 
    }

    .card:hover .card_body  {
        transform: translateX(0.25rem)
    }


    .card_glow,
    .border_glow {
        position: absolute; 
        width: 20rem; 
        height: 20rem; 
        transform: translate(-50%, -50%); 
        background: radial-gradient(circle closest-side at center, white, transparent); 
        opacity: 0; 
        transition: opacity 300ms ease; 
    }

    .card_glow { 
        z-index: 3; 
    
    }
    .border_glow { 
        z-index: 1; 
    }

    .card:hover .card_glow { 
        opacity: 0.1
    }

    .card:hover .border_glow { 
        opacity: 0.1
    }
</style>