<script setup lang="ts">
import FieldSelect from '@/components/Forms/Fields/FieldSelect.vue';
import FieldText from '@/components/Forms/Fields/FieldText.vue';
import ViewTitle from '@/components/ViewTitle.vue';
import type { NewUser } from '@/types/dummyjson';
import { reactive, type Reactive } from 'vue';
import { RouterLink } from 'vue-router';

const newUser: Reactive<NewUser> = reactive({
    firstName: '',
    lastName: '',
    maidenName: '',
    age: 0,
    gender: '',
    email: '',
    phone: '',
    role: '',
    password: '',
    password_confirm: ''
})

</script>

<template>
    <view-title title="Cadastrar"/>

    <div class="">
        <form action="" class="flex flex-col  px-2 sm:w-auto  pe-10 gap-3" @submit.prevent>
            <field-text label="Nome" v-model="newUser.firstName" required container-class="sm:w-auto md:w-60"/>
            <field-text label="Email" type="email" v-model="newUser.email" :required="true" container-class="sm:w-auto md:w-60"/>
            <field-select label="Papel" :options="[{value: 'admin', text:'Administrador'},{value: 'moderator', text: 'Moderador'},{value: 'user', text: 'Usuário'}]" class="" container-class="md:w-60 sm:w-auto" :required="true"/>
            <field-text label="Senha" v-model="newUser.password" type="password" :required="true" container-class="md:w-60 sm:w-auto"/>
            <field-text label="Confirmar senha" v-model="newUser.password_confirm" type="password" :required="true" container-class="md:w-60 sm:w-auto"/>
            <div class="md:w-60 flex justify-end gap-4">
                <router-link :to="{name: 'admin.users'}" class="btn bg-secondary-hover py-2 px-4 rounded">Sair</router-link>
                <button type="submit" class="btn bg-success-hover py-2 px-4 rounded">Salvar</button>
            </div>
        </form>
    </div>
</template>