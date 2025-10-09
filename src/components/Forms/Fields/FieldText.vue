<script lang="ts" setup>

const model = defineModel({default: ''});
const labelClass = 'block mb-2 text-sm font-medium text-gray-500 dark:text-white';
const inputClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

defineProps({
    inputName: String,
    label: String,
    containerClass: String,
    required: Boolean,
    disabled: Boolean,
    type: String,
    placeholder: String,
    error: String
})
</script>

<template>
    <div :class="containerClass">
        <label :class="labelClass" for="email">{{ label }}</label>
        <input 
            :type="type ?? 'text'" 
            :name="inputName" 
            :class="inputClass" 
            :placeholder="placeholder ?? ''" 
            v-model="model" 
            :disabled="disabled ?? false" 
            :required="required ?? false"
        />
        <small style="font-size: smaller;" class="text-red-500">{{  error }}</small>
    </div>
</template>