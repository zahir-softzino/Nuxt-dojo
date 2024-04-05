<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p">
        <!-- <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink> -->
        <ProductCard :product="p" />
      </div>
    </div> 
  </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    const { data:products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
      title: 'Hello Products'
    })
</script>

<style scoped>

</style>
