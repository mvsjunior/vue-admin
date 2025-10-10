<script setup lang="ts">
import BannerComponent from '@/components/Banners/BannerComponent.vue';
import FieldSelect from '@/components/Forms/Fields/FieldSelect.vue';
import FieldText from '@/components/Forms/Fields/FieldText.vue';
import ModalInfo from '@/components/Modal/ModalInfo.vue';
import ViewTitle from '@/components/ViewTitle.vue';
import { ApiRequest } from '@/factories/ApiRequest';
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
    password: ''
});

const infoModal = reactive({
    show: false,
    message: ""
});

const infoBanner = reactive({
    show: true,
    content: "<p class='text-gray-600 text-sm'>Adding a new user <strong>will not add it into the server</strong>. It will simulate a POST request and will return the new created user with a new id.</p>"
})

const api = ApiRequest.getInstance();

async function saveNewUser(){


    try{
        api.post('/user/add',newUser).then((res) => res)
    
        infoModal.message = "Usuário armazenado com sucesso.";
        infoModal.show = true;
    }catch(error){
     
        infoModal.message = ""
        console.warn(error);
    }
}

</script>

<template>
    <view-title title="Cadastrar"/>

    <BannerComponent  class="my-4"
        :content="infoBanner.content"
        :show="infoBanner.show"
        @clicked-on-close-btn="() => infoBanner.show = false"
    />
    <div class="">
        <form action="" class="flex flex-col  px-2 sm:w-auto  pe-10 gap-3" @submit.prevent @submit="saveNewUser">
            <field-text label="Nome" v-model="newUser.firstName" required container-class="sm:w-auto md:w-60"/>
            <field-text label="Email" type="email" v-model="newUser.email" :required="true" container-class="sm:w-auto md:w-60"/>
            <field-select label="Papel" :options="[{value: 'admin', text:'Administrador'},{value: 'moderator', text: 'Moderador'},{value: 'user', text: 'Usuário'}]" class="" container-class="md:w-60 sm:w-auto" :required="true"/>
            <field-text label="Senha" v-model="newUser.password" type="password" :required="true" container-class="md:w-60 sm:w-auto"/>
            <div class="md:w-60 flex justify-end gap-4">
                <router-link :to="{name: 'admin.users'}" class="btn bg-secondary-hover py-2 px-4 rounded">Sair</router-link>
                <button type="submit" class="btn bg-success-hover py-2 px-4 rounded" >Salvar</button>
            </div>
        </form>
    </div>

    <modal-info 
        v-if="infoModal.show"
        @clicked-btn-cancel="() => infoModal.show = false" @clicked-btn-confirm="() => infoModal.show = false" :modal-message="infoModal.message"
        class-confirm-btn="p-2 bg-secondary-hover rounded-sm"
    />
</template>