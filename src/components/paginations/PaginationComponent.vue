<script setup lang="ts">
import { type Pagination } from '@/types/types';
import PageNumberBtn from './PageNumberBtn.vue';
import NextBtn from './NextBtn.vue';
import PreviousBtn from './PreviousBtn.vue';

interface Props {
    meta: Pagination;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: "page-change", page: number): void;
}>();

function goToPage(page: number) {
  if (page >= 1 && page <= props.meta.lastPage) {
    emit("page-change", page);
  }
}
</script>

<template>
<nav class="flex items-center  mt-4">
    <!-- Botão Anterior -->
    <PreviousBtn
      :disabled="!props.meta.previousPageUrl"
      @click="goToPage(props.meta.currentPage - 1)"
    />

    <!-- Botões numerados -->
    <PageNumberBtn
      v-for="page in props.meta.lastPage"
      :key="page"
      :page="page"
      :active="page === props.meta.currentPage"
      @click="goToPage(page)"
    />

    <!-- Botão Próximo -->
    <NextBtn
      :disabled="!props.meta.nextPageUrl"
      @click="goToPage(props.meta.currentPage + 1)"
    />
  </nav>
</template>