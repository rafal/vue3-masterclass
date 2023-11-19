<script setup>
const { timestamp = 0 } = defineProps({
  timestamp: {
    type: Number,
    required: true
  }
})
import { computed } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

const diffForHumans = computed(() => dayjs.unix(timestamp).fromNow())
const humanFriendlyDate = computed(() => dayjs.unix(timestamp).format('llll'))
</script>

<template>
  <span :title="humanFriendlyDate">
    {{ diffForHumans }}
  </span>
</template>

<style lang="scss" scoped></style>
