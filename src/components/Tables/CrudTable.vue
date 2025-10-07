<template>
    <table class="w-full text-[9pt] text-left rtl:text-right text-gray-500 " >
        <thead class="uppercase text-gray-700  bg-gray-100">
            <tr>
                <template v-for="(value,index) of props.header" :key="index">
                    <th scope="col" class="pl-3 py-2 border-right-white">
                        {{value}}
                    </th>
                </template>
                <th></th>
            </tr>
        </thead>
        <tbody class="">
            <slot/>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    header: Array
});
</script>