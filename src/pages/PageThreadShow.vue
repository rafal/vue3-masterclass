<script setup>
import data from '@/data.json'
import { ref, computed } from 'vue'
import PostList from '@/components/PostList.vue'
const { id } = defineProps({
  id: {
    type: String,
    required: true
  }
})
const threads = ref(data.threads)
const posts = ref(data.posts)

const thread = computed(() => threads.value.find((t) => t.id === id))
const threadPosts = computed(() => posts.value.filter((p) => p.threadId === id))
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
  </div>
</template>
