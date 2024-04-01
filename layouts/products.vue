<template>
    <div>
        <header>
            <NuxtLink to="/">DOJO</NuxtLink>
        </header>


        <div>
            <slot />
        </div>
        
        <footer>
            <nav>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>        
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active{
        color: #12b488;
        border-bottom: 1px solid #12b488;
    }
    a{
        text-decoration: none;
    }
</style>  