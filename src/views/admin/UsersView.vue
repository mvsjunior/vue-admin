<script setup lang="ts">
import SearchField from '@/components/Forms/Fields/SearchField.vue';
import CrudTable from '@/components/Tables/CrudTable.vue';
import ViewTitle from '@/components/ViewTitle.vue';
import { ApiRequest } from '@/factories/ApiRequest';
import type { FetchUsersResponse, User } from '@/types/dummyjson';
import type { Pagination } from '@/types/types';
import PaginationComponent from '@/components/paginations/PaginationComponent.vue';
import { computed, ref } from 'vue';
import type { Ref } from 'vue';
import { dummyPaginationMapper, type paginatedDummyJson } from '@/mappers/DummyjsonMappers';

const api = ApiRequest.getInstance();
const users: Ref<User[] | []> = ref([]);
const isLoading: Ref<boolean> = ref(false);
const pagination: Ref<Pagination> = ref({
        currentPage: 1,
        perPage: 30,
        total: 0,
        lastPage: 0,
        nextPageUrl: '',
        previousPageUrl: ''
});

async function getUsers(q = ''){
    console.log(q);
    isLoading.value = true;
    q = q.trim();
    
  
    try {
        const _limit = `limit=${pagination.value.perPage}`;
        const _skip = pagination.value.currentPage > 1 ? 'skip='+(pagination.value.perPage * (pagination.value.currentPage - 1)) : '';

        const endpoint = q != '' ? `/users/search?q=${q}` : `/users?&${_limit}&${_skip}`;
        const usersPaginated = await api.get<FetchUsersResponse>(endpoint).then(
            (res) => {
                isLoading.value = false;
                return res.data;
        });
    
        console.log(usersPaginated);
        if(usersPaginated.users){
            pagination.value = dummyPaginationMapper(usersPaginated as paginatedDummyJson);
            users.value = usersPaginated.users;
        }
    
        console.log(usersPaginated.users);
        
    } catch (error) {
        isLoading.value = false;
        console.warn(error)
    }
}

function handlePageChange(page: number) {

    pagination.value.currentPage = page;
    pagination.value = pagination.value;

    // console.log('pagination', pagination.value);
    // console.log(page);
    getUsers();
}

getUsers();

const compUsers = computed(() => {
    return users.value
})


</script>

<template>
    <view-title title="Usuários" />

    <div class="flex justify-between">
        <button class="btn bg-success-hover p-2 rounded my-2"><i class="fa fa-user-plus"></i></button>
        <div>
            <div>
                <div class="my-2">
                    <search-field @clicked-search-btn="(model) => getUsers(model)"/>
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center" v-if="isLoading">
        <div
            class="inline-flex cursor-not-allowed items-center rounded-md bg-gray-600/60 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-gray-400">
            <svg class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>Processando…
        </div>
    </div>

    <div class="flex flex-col h-full  items-end w-full gap-2" v-else-if="!isLoading">
        <crud-table :header="['id','name','role']" class="border border-gray-200" v-if="compUsers.length > 0">
            <tr v-for="(_user,index) of compUsers" :key="index" class="border-b border-gray-200 text-[10pt]"
                :class="index%2 ? 'bg-gray-200/10' : ''">
                <td class="px-4 py-2">{{ _user.id }}</td>
                <td>{{ `${_user.firstName} ${_user.lastName}` }}</td>
                <td>{{ _user.role }}</td>
            </tr>
        </crud-table>
        <h1 class="text-center text-2xl my-5 p-10 w-full" v-else>Nenhum registro encontrado...</h1>

        <div class="pagination" v-if="pagination.total > 30">
            <PaginationComponent :meta="pagination" @page-change="handlePageChange"/>
        </div>
    </div>
</template>