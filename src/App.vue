<template>
  <!-- <h1>App Header</h1> -->
  <!-- <V102 /> -->
  <!-- 这里的 lazy 修饰符也不生效 -->
  <V203 v-model.lazy="v203.value1.value" />
  <br />
  <!-- 这里的 lazy 修饰符生效 -->
  <input type="text" v-model.lazy="v203.value1.value" />
  <text>{{ v203.value1.value }}</text>

  <V203 v-model="value2" />
  <br />
  <input type="text" v-model="value2" />
  <text>{{ value2 }}</text>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import V102 from './components/V102.vue';
  import V203 from './components/V203.vue';

  // const v203 = reactive({
  //   value1: '1些文字',
  //   value2: '2些文字',
  // });
  // // 直接使用 v203.value1
  // // 解构 reactive 包裹对象后的数据并没有响应性
  // let { value2 } = v203;
  // const v203 = ref({
  //   value1: '1些文字',
  //   value2: '2些文字',
  // });
  // // 直接使用 v203.value1
  // // 解构 ref 包裹对象的数据并没有响应性
  // let { value2 } = v203.value;
  const v203 = {
    value1: ref('1些文字'),
    value2: ref('2些文字'),
  };
  // 直接使用 v203.value1.value
  // 这里解构出来的数据是响应性的
  let { value2 } = v203;
</script>

<style scoped></style>
