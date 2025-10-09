<template>
    <div
        class="flex items-center bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-300">
        <input 
            id="search" 
            :type="type ?? 'text'" 
            :name="inputName ?? 'search'" 
            :class="inputClass" 
            :placeholder="placeholder ?? ''" 
            v-model="model" 
            :disabled="disabled ?? false" 
            :required="required ?? false"
            class="block min-w-0 grow py-1.5 pr-3 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
        <button 
            class="p-2 btn bg-secondary " 
            @click="$emit('clickedSearchBtn',model)"
        ><i class="fa fa-search"></i></button>
    </div>
</template>

<script setup lang="ts">

const model = defineModel({default: ''});

defineProps({
    inputName: String,
    label: String,
    containerClass: String,
    inputClass: String,
    required: Boolean,
    disabled: Boolean,
    type: String,
    placeholder: String,
    error: String
})

defineEmits(['clickedSearchBtn'])
</script>