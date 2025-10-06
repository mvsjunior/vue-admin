<script lang="ts" setup>
    const model = defineModel({default: ''});
    defineProps({
        inputName: String,
        required: Boolean,
        disabled: Boolean,
        type: String,
        placeholder: String,
        className: String,
        autocomplete: String
    })
</script>

<template>
    <input :type="type ?? 'text'" :name="inputName" :class="className" :placeholder="placeholder ?? ''" v-model="model" :disabled="disabled ?? false" :required="required ?? false" :autocomplete="autocomplete ? autocomplete : 'off'"/>
</template>
