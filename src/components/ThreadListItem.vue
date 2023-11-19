<script setup>
import data from '@/data.json'
import { ref } from 'vue'
defineProps({
  thread: {
    type: Object,
    required: true
  }
})
const users = ref(data.users)
const userById = (id) => users.value.find((u) => u.id === id)
</script>

<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{ name: 'threadShow', params: { id: thread.id } }">{{
          thread.title
        }}</router-link>
      </p>
      <p class="text-faded text-xsmall">
        By
        <a href="#">{{ userById(thread.userId).name }}</a
        >, <AppDate :timestamp="thread.publishedAt" />
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">{{ thread.posts.length }} replies</p>

      <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="" />

      <div>
        <p class="text-xsmall">
          <a href="">{{ userById(thread.userId).name }}</a>
        </p>
        <p class="text-xsmall text-faded"><AppDate :timestamp="thread.publishedAt" /></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
