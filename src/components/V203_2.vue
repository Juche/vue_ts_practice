<template>
  <h3>[深入组件.03] [事件] 2</h3>
  <input type="text" v-model="value" />
  <text>{{ value }}</text>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);
  const value = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit('update:modelValue', val);
    },
  });
</script>

<style scoped></style>
