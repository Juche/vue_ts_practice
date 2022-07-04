<template>
  <h3>[深入组件.03] [事件]</h3>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  <text>{{ modelValue }}</text>
</template>

<script lang="ts" setup>
  defineProps(['modelValue']);
  defineEmits(['update:modelValue']);
</script>

<style scoped></style>
