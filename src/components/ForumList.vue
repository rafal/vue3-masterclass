<script setup>
defineProps({
  category: {
    type: Object
  },
  forums: {
    type: Array,
    required: true,
    default: () => []
  }
})

const forumThreadsWord = (forum) => {
  const threads = forum.threads?.length
  if (!threads) return 'No threads'
  return threads === 1 ? 'thread' : 'threads'
}
</script>

<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link v-if="category" :to="{ name: 'category', params: { id: category.id } }">{{
          category.name
        }}</router-link>
        <span v-else>Forums</span>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link class="text-xlarge" :to="{ name: 'forum', params: { id: forum.id } }">{{
            forum.name
          }}</router-link>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span>
            {{ forumThreadsWord(forum) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
