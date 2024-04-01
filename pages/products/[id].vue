<template>
    
  <div>
    <p>Product ID is: {{ id }}</p>
  </div>
</template>

<script setup>
    const { id } = useRoute().params
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>  