<script setup>
import ForumList from '@/components/ForumList.vue'
import data from '@/data.json'
</script>

<template>
  <h1>Welcome to the forum!</h1>
  <ForumList :forums="data.forums" />
</template>
