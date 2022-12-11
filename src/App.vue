<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterView } from 'vue-router'
// import MainLayout from './layouts/MainLayout.vue'
</script>

<template>
  <RouterView name="TopLayout" />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
