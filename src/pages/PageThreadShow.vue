<script setup>
import data from '@/data.json'
import { ref, computed } from 'vue'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
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

const addPost = (e) => {
  const post = {
    ...e,
    threadId: id
  }
  posts.value.push(post)
  thread.value.posts.push(post.id)
}
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor :thread="thread" @save="addPost" />
  </div>
</template>
