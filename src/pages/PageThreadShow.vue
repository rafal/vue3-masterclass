<script setup>
import data from '@/data.json'
import { ref, computed } from 'vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const threads = ref(data.threads)
const posts = ref(data.posts)
const users = ref(data.users)

const thread = computed(() => threads.value.find((t) => t.id === props.id))

const postById = (id) => posts.value.find((p) => p.id === id)
const userById = (id) => users.value.find((u) => u.id === id)
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <div class="post-list">
      <div v-for="postId in thread.posts" :key="postId" class="post">
        <div class="user-info">
          <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>

          <a href="#">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="" />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">{{ postById(postId).publishedAt }}</div>
      </div>
    </div>
  </div>
</template>
