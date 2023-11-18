<script setup>
import PostListItem from '@/components/PostListItem.vue'
const { posts = () => [] } = defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="post-list">
    <PostListItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style lang="scss" scoped></style>
