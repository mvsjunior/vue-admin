<script setup lang="ts">
import {RouterView, useRoute } from 'vue-router';

const route = useRoute();
</script>


<template>
  <template  v-if="route.meta.layout">
    <component :is="route.meta.layout">
      <RouterView />
    </component>
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<style scoped></style>
