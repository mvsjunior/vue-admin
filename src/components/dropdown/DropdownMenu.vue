<script setup lang="ts">

const props = defineProps({
    class: String,
    id: String
})
</script>

<template >
    <ul class="dropdown-menu text-small shadow" :class="props.class" :id="props.id" aria-labelledby="dropdownNavLink">
        <slot/>
        <li><a class="dropdown-item active" href="#" aria-current="page">Overview</a></li>
        <li><a class="dropdown-item" href="#">Inventory</a></li>
        <li><a class="dropdown-item" href="#">Customers</a></li>
        <li><a class="dropdown-item" href="#">Products</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Reports</a></li>
        <li><a class="dropdown-item" href="#">Analytics</a></li>
    </ul>
</template>