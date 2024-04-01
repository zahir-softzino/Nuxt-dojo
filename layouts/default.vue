<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">DOJO</NuxtLink>

                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>        
        </header>


        <div>
            <slot />
        </div>
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