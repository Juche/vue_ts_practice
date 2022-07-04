<template>
  <h3></h3>
  <p>{{ provMsg }}</p>
</template>

<script lang="ts" setup>
  import { inject } from 'vue';
  // const provMsg = inject('provMsg', '如果显示的我,说明没有对应的 provMsg');
  const { provMsg, provFn } = inject('provMsg');
  setTimeout(() => {
    provFn();
  }, 6000);
</script>

<style scoped></style>
