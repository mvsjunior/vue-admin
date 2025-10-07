<template>
  <div id="sidebar" :class="[
    // Mobile -> sidebar fixa
    'text-gray-600 fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out',
    isOpen ? 'translate-x-0' : '-translate-x-full',

    // Desktop -> sidebar estática, sempre visível
    'lg:static lg:translate-x-0'
  ]" style="display: flex; flex-direction: column; justify-content:space-between;">
    <!-- Header com botão de fechar (mobile) -->
    <div>
      <div class="h-16 flex items-center justify-between px-4">
        <a href="#" class="font-bold text-xl"><i class="fa fa-cubes"></i> Painel Admin</a>
        <button class="lg:hidden p-2 rounded-md hover:bg-gray-100" @click="$emit('close')">
          <!-- Ícone X -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav class="mt-4 flex flex-col space-y-2 p-4 text-sm ">
        <RouterLink :to="'#'" class="px-4 py-2 rounded-md hover:bg-gray-100"><i class="nav-icon fa fa-bar-chart "></i> Dashboard</RouterLink>
        <RouterLink :to="{name: 'admin.users'}" class="px-4 py-2 rounded-md hover:bg-gray-100"><i class="nav-icon fa fa-users "></i> Usuários</RouterLink>
      </nav>
    </div>
    <div class="px-4 h-8">
      <small>Versão 0.1.2</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  isOpen: Boolean,
})
</script>

<style>

body div{
  margin:0;
}
</style>