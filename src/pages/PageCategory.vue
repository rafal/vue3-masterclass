<script setup>
import ForumList from '@/components/ForumList.vue'
import data from '@/data.json'
const { id } = defineProps({
  id: {
    type: String,
    required: true
  }
})
const forums = (category) => data.forums.filter((f) => f.categoryId === category.id)
const category = data.categories.find((c) => c.id === id)
</script>

<template>
  <div class="col-full push-top">
    <h1>{{ category.name }}</h1>
  </div>

  <ForumList :forums="forums(category)" :category="category" />
</template>

<style lang="scss" scoped></style>
