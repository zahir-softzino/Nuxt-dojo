<template>
    
  <div>
    <head>
      <title>{{ product.title }}</title>
      <Meta name="description" :content="product.description"/>
    </head>
    <ProductDetails :product="product"/>
  </div>
</template>

<script setup>
    const { id } = useRoute().params

    const uri = 'https://fakestoreapi.com/products/' + id

    const { data: product } = await useFetch(uri, {key: id})

    if(!product.value){
      throw createError({statusCode: 404, statusMessage:"Product Not Found.", fatal: true})
    }
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>  