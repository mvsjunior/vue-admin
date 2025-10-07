<template>
  <div class="flex">
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
      <main class=" h-full  p-6 bg-gray-200/50">
        <div class="rounded-md  flex-col flex gap-2 ">

          <!-- Breadcumb -->
          <BreadcumbComponent v-if="route.meta.path" class="hidden md:block">
            <BreadcumbItem class="text-lg"><RouterLink :to="{name: 'admin.home'}"><i class="fa fa-home"></i></RouterLink></BreadcumbItem>
            <BreadcumbDivider/>
            <BreadcumbItem :path="routePath"/>
          </BreadcumbComponent>

          <div class="bg-white rounded p-4  shadow-sm" >
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

const route = useRoute();
const routePath: ComputedRef<MetaRoute[]> = computed(() => Array.isArray(route.meta.path)  ? (route.meta.path as MetaRoute[])  : []);

const sidebarOpen = ref(false)
</script>

<style>

</style>