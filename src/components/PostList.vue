<script setup>
import data from '@/data.json'
import { ref } from 'vue'
const { posts = () => [] } = defineProps({
  posts: {
    type: Array,
    required: true
  }
})
const users = ref(data.users)
const postById = (id) => posts.find((p) => p.id === id)
const userById = (id) => users.value.find((u) => u.id === id)
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="#">
          <img class="avatar-large" :src="userById(post.userId).avatar" alt="" />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>

      <div class="post-date text-faded">{{ postById(post.id).publishedAt }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
