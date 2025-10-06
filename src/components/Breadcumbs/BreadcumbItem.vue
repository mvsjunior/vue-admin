<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';


import BreadcumbDivider from './BreadcumbDivider.vue';
import type { MetaRoute } from '@/types/types';

defineProps({
    className: String,
    path: Array<MetaRoute>
})

</script>
<template>
    <template v-if="!path">
        <li class="h-full block px-4" :class="className" style="display: flex; justify-content: center; align-items: center; text-align: center;">
            <slot></slot>
        </li>
    </template>
    <template v-else>
        <template  v-for="(value ,index) of path" :key="index">
            <li class="" :class="className" style="align-items: center; align-content: center;"
            >
                <RouterLink :to="value.url ?? ''" class="flex flex w-auto">{{ value.title ?? ''}}</RouterLink>
            </li>
            <template v-if="path.length - 1 > index">
                <BreadcumbDivider/>
            </template>
        </template>
    </template>
</template>