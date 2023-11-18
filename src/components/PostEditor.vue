<script setup>
import { ref } from 'vue'
const emit = defineEmits(['save'])
const text = ref('')

const save = () => {
  const postId = 'gggg' + Math.random()
  const post = {
    id: postId,
    userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
    text: text.value,
    publishedAt: Math.floor(Date.now() / 1000)
  }
  emit('save', post)
  text.value = ''
}
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" id="" class="form-input" name="" rows="10" cols="30"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
