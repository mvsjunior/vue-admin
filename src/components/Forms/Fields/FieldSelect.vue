<script setup lang="ts">
const model = defineModel({ default: '' });

const labelClass =
  'block mb-2 text-sm font-medium text-gray-500';
const selectClass =
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ';

defineProps({
  inputName: String,
  label: String,
  containerClass: String,
  required: Boolean,
  disabled: Boolean,
  options: {
    type: Array as () => { value: string | number; text: string }[],
    default: () => [],
  },
  error: String,
});
</script>

<template>
  <div :class="containerClass ?? 'mb-5'">
    <label :class="labelClass" :for="inputName">{{ label }}</label>

    <select
      :name="inputName"
      :id="inputName"
      :class="selectClass"
      v-model="model"
      :disabled="disabled ?? false"
      :required="required ?? false"
    >
      <option value="">Selecione...</option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
      >
        {{ opt.text }}
      </option>
    </select>

    <small style="font-size: smaller" class="text-red-500">{{ error }}</small>
  </div>
</template>
