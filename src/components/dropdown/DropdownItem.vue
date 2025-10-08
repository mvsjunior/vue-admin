<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    id: String,
    class: String,
    style: String,
    selected: Boolean,
    value: String,
    text: String
})
</script>

<template>
    <li class="dropdown-item" :class="props.class" :id="props.id" :style="props.style" :selected="props.selected">{{ props.text ?? '' }}<slot /></li>
</template>