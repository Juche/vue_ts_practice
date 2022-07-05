<template>
  <h3>[可重用性.01] [组合式函数]</h3>
  <div class="mouse-area">
    <p>xPos: {{ x }}</p>
    <p>yPos: {{ y }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { getMousePos } from '../utils/mouse';
  const { x, y } = getMousePos();
</script>

<style scoped>
  .mouse-area {
    width: 600px;
    height: 300px;
    background: #000;
    color: #fff;
    cursor: default;
  }
</style>
