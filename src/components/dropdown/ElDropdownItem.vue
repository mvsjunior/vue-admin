<template>

    <template v-if="to">
        <router-link :to="to">
            <button class="block w-full px-4 py-2 text-left text-sm text-gray-700 focus:bg-gray-100 cursor-pointer focus:text-gray-900 focus:outline-hidden" :class="className">
                {{ text }}<slot></slot>
            </button>        
        </router-link>
    </template>

    <template v-else>
        <button class="block w-full px-4 py-2 text-left text-sm text-gray-700 focus:bg-gray-100 cursor-pointer focus:text-gray-900 focus:outline-hidden" :class="className">
            {{ text }}<slot></slot>
        </button>
    </template>

</template>

<script setup lang="ts">
defineProps({
    className: String,
    text: String,
    to: String    
})
</script>