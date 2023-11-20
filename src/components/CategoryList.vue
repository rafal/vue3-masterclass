<script setup>
import ForumList from '@/components/ForumList.vue'
import source from '@/data.json'
defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => []
  }
})
const forums = (category) => source.forums.filter((f) => f.categoryId === category.id)
</script>

<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="forums(category)"
    :category="category"
  />
</template>

<style lang="scss" scoped></style>
