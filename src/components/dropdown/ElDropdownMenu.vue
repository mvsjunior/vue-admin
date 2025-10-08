<template>
    <el-dropdown class="inline-block">
        <button :class="btnClass ?? ''" v-html="btnContent">
        </button>

        <el-menu anchor="bottom end" popover class="w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:ease-out ">
            <div class="p-1">
                <slot></slot>
            </div>
        </el-menu>
    </el-dropdown>
</template>


<script setup lang="ts">
defineProps({
    btnClass: String,
    btnContent: String
})
</script>