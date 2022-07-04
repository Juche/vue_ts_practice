<template>
  <h3>[深入组件.06] [依赖注入]</h3>
  <V206_s1 />
</template>

<script lang="ts" setup>
  import { provide, ref } from 'vue';
  import V206_s1 from './V206_s1.vue';

  const provMsg = ref('msg provide from V206.vue');

  function provFn(): void {
    console.log(`🚀 ~ provFn ~ provFn`);
    provMsg.value = 'msg modified by provFn';
  }

  // provide('provMsg', provMsg);
  provide('provMsg', { provMsg, provFn });

  setTimeout(() => {
    provMsg.value = '消息由 V206.vue 提供';
  }, 3000);
</script>

<style scoped></style>
