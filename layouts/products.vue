<template>
    <div>
        <header class="shadow-sm bg-white">
            <NuxtLink to="/">DOJO</NuxtLink>
        </header>


        <div class="container mx-auto p-4">
            <slot />
        </div>
        
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <nav class=" container mx-auto p-4 flex justify-between">
                <ul class="flex gap-4">
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