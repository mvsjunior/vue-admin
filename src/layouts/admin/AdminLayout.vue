<template>
  <div class="flex" style="width: 100vw;">
    <!-- Sidebar -->
    <SidebarComponent :isOpen="sidebarOpen" @close="sidebarOpen = false" />

    <!-- Overlay (mobile) -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-gray-800/50 bg-opacity-50 z-30 lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Conteúdo principal -->
    <div class="flex-1 flex flex-col min-h-screen lg:ml-64">
      <NavbarComponent @toggle-sidebar="sidebarOpen = !sidebarOpen" />
       
      <!-- Área de conteúdo -->
      <main class="flex-1 p-6 bg-gray-200/50">
        <div class="rounded-md h-full flex-col flex gap-2 ">

          <!-- Breadcumb -->
          <BreadcumbComponent v-if="route.meta.path" class="hidden md:block">
            <BreadcumbItem class="text-lg"><RouterLink :to="{name: 'admin.home'}"><i class="fa fa-home"></i></RouterLink></BreadcumbItem>
            <BreadcumbDivider></BreadcumbDivider>
            <BreadcumbItem :path="routePath"/>
          </BreadcumbComponent>

          <div class="bg-white rounded p-4 shadow-sm h-full">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type ComputedRef } from "vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import BreadcumbComponent from "@/components/Breadcumbs/BreadcumbComponent.vue";
import BreadcumbItem from "@/components/Breadcumbs/BreadcumbItem.vue";
import BreadcumbDivider from "@/components/Breadcumbs/BreadcumbDivider.vue";
import { useRoute } from "vue-router";
import type { MetaRoute } from "@/types/types";
import "https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1";

const route = useRoute();
const routePath: ComputedRef<MetaRoute[]> = computed(() => Array.isArray(route.meta.path)  ? (route.meta.path as MetaRoute[])  : []);

const sidebarOpen = ref(false)
</script>

<style>
/* color palette from <https://github.com/vuejs/theme> */
:root {
  --vt-c-white: #ffffff;
  --vt-c-white-soft: #f8f8f8;
  --vt-c-white-mute: #f2f2f2;

  --vt-c-black: #181818;
  --vt-c-black-soft: #222222;
  --vt-c-black-mute: #282828;

  --vt-c-indigo: #2c3e50;

  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);

  --vt-c-text-light-1: var(--vt-c-indigo);
  --vt-c-text-light-2: rgba(60, 60, 60, 0.66);
  --vt-c-text-dark-1: var(--vt-c-white);
  --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);
}

/* semantic color variables for this project */
:root {
  --color-background: var(--vt-c-white);
  --color-background-soft: var(--vt-c-white-soft);
  --color-background-mute: var(--vt-c-white-mute);

  --color-border: var(--vt-c-divider-light-2);
  --color-border-hover: var(--vt-c-divider-light-1);

  --color-heading: var(--vt-c-text-light-1);
  --color-text: var(--vt-c-text-light-1);

  --section-gap: 160px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--vt-c-black);
    --color-background-soft: var(--vt-c-black-soft);
    --color-background-mute: var(--vt-c-black-mute);

    --color-border: var(--vt-c-divider-dark-2);
    --color-border-hover: var(--vt-c-divider-dark-1);

    --color-heading: var(--vt-c-text-dark-1);
    --color-text: var(--vt-c-text-dark-2);
  }
}


</style>