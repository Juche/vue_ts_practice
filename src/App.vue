<template>
  <h1>App Demos</h1>

  <V301 />
  <V206 />
  <V205>
    <!-- <template #header> new header </template>
    <template #content> new content </template>
    <template #footer> new footer </template> -->
    <template #[slotName]>我是动态 {{ slotName }}</template>
  </V205>

  <!-- 这里的 lazy 修饰符也不生效 -->
  <V203 v-model.lazy="v203.value1.value" />
  <V203_2 v-model.lazy="v203.value1.value" />
  <h3>原生</h3>
  <!-- 这里的 lazy 修饰符生效 -->
  <input type="text" v-model.lazy="v203.value1.value" />
  <text>{{ v203.value1.value }}</text>

  <V203 v-model="value2" />
  <V203_2 v-model="value2" />
  <h3>原生</h3>
  <input type="text" v-model="value2" />
  <text>{{ value2 }}</text>
  <V102 />
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import V102 from './components/V102.vue';
  import V203 from './components/V203.vue';
  import V203_2 from './components/V203_2.vue';
  import V205 from './components/V205.vue';
  import V206 from './components/V206.vue';
  import V301 from './components/V301.vue';

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

  let count = -1;
  let slotName = ref('');
  const slots = ['header', 'content', 'footer'];
  function switchSlotName() {
    count++;
    slotName.value = slots[count % 3];
    console.log(count);
  }
  function si(fn: Function, delay: number) {
    fn();
    let timer = setTimeout(() => {
      // slotName.value = 'content';
      clearTimeout(timer);
      si(fn, delay);
    }, delay);
  }
  si(switchSlotName, 3000);
</script>

<style scoped></style>
