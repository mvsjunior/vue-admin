<template>
    <div tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full">
        <div class="bg-gray-800/50 w-full min-h-full flex-1 flex items-center justify-center">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm ">
                    <button @click="$emit('clickedBtnClose')" type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center ">
                        <h2 class="text-2xl">{{ modalTitle }}</h2>
                        <h3  style="margin:10px auto" class="mb-5 text-lg font-normal text-gray-500">{{ modalMessage ?? `Tem certeza que deseja deletar esse registro?`}}</h3>
                        <br>
                        <div class="flex items-center justify-center gap-4">
                            <div :class="classCancelBtn ?? `btn outline-secondary rounded-sm`" @click="$emit('clickedBtnCancel')">Cancelar</div>
                            <div :class="classConfirmBtn ?? `btn outline-danger rounded-sm`" @click="$emit('clickedBtnConfirm')">Apagar</div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    modalTitle: String,
    textConfirmBtn: String,
    textCancelBtn: String,
    classConfirmBtn: String,
    classCancelBtn: String,
    modalMessage: String
})
</script>
<style>
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.2s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>