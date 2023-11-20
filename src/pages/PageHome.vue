<script setup>
import CategoryList from '@/components/CategoryList.vue'
import data from '@/data.json'
</script>

<template>
  <h1>Welcome to the forum!</h1>
  <CategoryList :categories="data.categories" />
</template>
