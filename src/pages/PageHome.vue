<script setup>
import ThreadList from '@/components/ThreadList.vue'
import data from '@/data.json'
</script>

<template>
  <h1>Welcome to the forum!</h1>
  <ThreadList :threads="data.threads" />
</template>
