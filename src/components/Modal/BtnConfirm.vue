<template>
    <button class="btn bg-danger-hover">
        <slot/>
    </button>
</template>

<script lang="ts" setup>
defineProps({
    className: String
})
</script>

