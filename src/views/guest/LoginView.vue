<script setup lang="ts">
import FieldText from '@/components/Forms/Fields/FieldText.vue';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const showMessage = ref(false);

</script>

<template>
    
    <div class="w-100 m-auto flex flex-col justify-center px-6 py-12 lg:px-8 gap-4 bg-white h-fit rounded shadow text-gray-500">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <span class="block mx-auto mt-10 text-center text-2xl/9  tracking-tight "><i class="fa fa-calendar"></i> <b class="font-bold">Painel</b> Admin </span>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent method="POST" class="space-y-6">
                <FieldText label="E-mail" type="email" :required="true" v-model="email"/>
                <FieldText label="Senha" type="password" :required="true" v-model="password"/>
                <button class="btn bg-success-hover rounded w-full p-2 font-bold">Acessar</button>
            </form>

            <span class="text-red-500/60 block text-center" v-if="showMessage">
                {{ 'Usuário ou senha incorretos.' }}
            </span>
            <p class="mt-10 py-4 text-center text-sm/6 wrap">
            Ainda não tem cadastro?<br>
            <a href="#" class="font-semibold text-green-400 hover:text-green-300">Clique aqui e experimente 14 dias grátis</a>
            </p>
        </div>
    </div>
</template>


<style>
    body,html{
        width: 100vw;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>