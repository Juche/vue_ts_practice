<template>
  <h3>[深入组件.05] [插槽]</h3>
  <div class="header">
    <slot name="header">header</slot>
  </div>
  <div class="content">
    <slot name="content">content</slot>
  </div>
  <div class="footer">
    <slot name="footer">footer</slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
  .header {
    background: #ffc;
  }
  .content {
    background: #fcf;
  }
  .footer {
    background: #cff;
  }
</style>
