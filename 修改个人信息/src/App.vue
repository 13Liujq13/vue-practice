<template>
  <Img v-model:person="person" />
</template>


<script setup lang="ts">
import { ref } from 'vue'
import Img from './components/Img.vue'

const person = ref({
  name: '',
  contact: '',
  birthday: { day: "1日", month: "1月", year: "2000年" },
  gender: 'male' as const,
  avatar: ''
})
</script>

<style scoped>

</style>