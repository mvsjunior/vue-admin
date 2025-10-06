<template>
  <header class="sticky top-0 z-30 bg-white shadow-md h-16 flex items-center px-4 ">
    <!-- Botão apenas no mobile -->
    <button
      class="lg:hidden mr-4 p-2 rounded-md hover:bg-gray-100"
      @click="$emit('toggle-sidebar')"
    >
      <!-- Ícone hambúrguer -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <div 
      class="" 
      style="
        display: flex; justify-content: space-between; align-items: center;
        width: 100%; 
      ">
      <div></div>
      <!-- <h1 class="font-semibold text-lg">Administração</h1> -->
  
      <div class="ml-auto flex items-center gap-4">
        <button class="p-2 rounded-full hover:bg-gray-100">
          <!-- Notificação -->
          <svg class="h-6 w-6 text-gray-500" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 
                 0118 14.158V11a6.002 6.002 0 
                 00-4-5.659V4a2 2 0 
                 10-4 0v1.341C7.67 6.165 6 8.388 
                 6 11v3.159c0 .538-.214 1.055-.595 
                 1.436L4 17h5m6 0v1a3 3 0 
                 11-6 0v-1m6 0H9"/>
          </svg>
        </button>
  
        <!-- Profile dropdown -->
            <el-dropdown class="relative ml-3">
              <button class="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img src="https://placehold.co/32" alt="" class="size-8 rounded-full outline -outline-offset-1 outline-white/10" />
              </button>

              <el-menu anchor="bottom end" popover class="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Perfil</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Configurações</a>
                <a @click="logout" href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sair</a>
              </el-menu>
            </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { AuthService } from '@/services/AuthService';
import { useRouter } from 'vue-router';

const auth = new AuthService;
const route = useRouter();

function logout(){
  
  auth.logOut();
  route.push({name: 'guest.login'});
  
}

</script>