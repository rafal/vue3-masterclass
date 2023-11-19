<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
    default: () => {}
  }
})
import data from '@/data.json'
import { ref } from 'vue'
const users = ref(data.users)
const userById = (id) => users.value.find((u) => u.id === id)
</script>

<template>
  <div class="post">
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

    <div class="post-date text-faded">
      <AppDate :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
