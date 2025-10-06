<script setup lang="ts">
import FieldText from '@/components/Forms/Fields/FieldText.vue';
import { AuthService } from '@/services/AuthService';
import type {LoginSuccess } from '@/types/dummyjson';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('logant');
const password = ref('logantpass');
const errorMessage = ref('');

const router = useRouter();

const auth = new AuthService;

async function login(){

    try {
        const res: LoginSuccess = await auth.login(name.value, password.value);
        if(res){
            router.push({name:'admin.home'});
        }
        
    } catch (error) {
        if(error instanceof(Error) && error.message == 'Username and password required'){
            errorMessage.value = 'É preencher os campos usuário e senha';
        }else if(error instanceof(Error) && error.message == 'Invalid credentials'){
            errorMessage.value = 'Usuário ou senha inválidos.';
        }else{
            errorMessage.value = 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.';
        }
    }
    
}

</script>

<template>
    
    <div class="w-100 m-auto flex flex-col justify-center px-6 py-12 lg:px-8 gap-4 bg-white h-fit rounded shadow text-gray-500">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <span class="block mx-auto mt-10 text-center text-2xl/9  tracking-tight "><i class="fa fa-calendar"></i> <b class="font-bold">Painel</b> Admin </span>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <span class="text-red-500/60 block text-center" v-if="errorMessage">
                {{ errorMessage }}
            </span>
            <form @submit.prevent method="POST" class="space-y-6">
                <FieldText label="Usuário" type="text" :required="true" v-model="name"/>
                <FieldText label="Senha" type="password" :required="true" v-model="password"/>
                <button class="btn bg-success-hover rounded w-full p-2 font-bold" @click="login">Acessar</button>
            </form>

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