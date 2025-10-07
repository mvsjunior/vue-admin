<template>
    <div class="w-full border-b border-gray-200 pb-2 " style="margin-bottom: 20pt">
        <h1 class="mt-2 text-2xl tracking-tight sm:text-4xl text-pretty text-gray-600">{{ title }}<slot/></h1>
        <p class="text-gray-500 my-4 pt-2" v-if="subtitle">{{ subtitle }}</p>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: String,
    subtitle: String
})
</script>