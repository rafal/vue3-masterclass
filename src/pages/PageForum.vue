<script setup>
import ThreadList from '@/components/ThreadList.vue'
import data from '@/data.json'
import { computed } from 'vue'
const { id = '' } = defineProps({
  id: {
    type: String,
    required: true
  }
})
const forum = computed(() => data.forums.find((f) => f.id === id))
const threads = computed(() => data.threads.filter((t) => t.forumId === id))
</script>

<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="threads" />
  </div>
</template>

<style lang="scss" scoped></style>
