<template>
    <div class="relative isolate flex items-center gap-x-6 text-center  overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1" v-if="show">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2" v-html="content">
            
        </div>
        <div class="flex flex-1 justify-end">
            <button type="button" class="-m-3 p-3 focus-visible:-outline-offset-4 cursor-pointer" @click="$emit('clickedOnCloseBtn')">
            <span class="sr-only">Dismiss</span>
            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 text-gray-900">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    content: {type: String, default: ''},
    show: {type: Boolean, default: true},
    showCloseBtn: {type: Boolean, default: true}
})

defineEmits(['clickedOnCloseBtn'])
</script>