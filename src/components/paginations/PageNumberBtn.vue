<template>

    <template v-if="active">
        <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-green-500 text-white px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            {{ props.page }}
        </a>
    </template>

    <template v-else>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            {{ props.page }}
        </a>
    </template>

</template>

<script lang="ts" setup>
interface Props {
    page: number;
    active?: boolean;
}

const props = defineProps<Props>();
</script>