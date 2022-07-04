<template>
  <h3>[基础.02] [模板语法] 1</h3>
  <h5>1. “Mustache”语法</h5>
  <p>{{ user.name }} - {{ user.age }} - {{ user?.fav ?? '无' }}</p>
  <h5>2. Attribute 绑定</h5>
  <!-- Attribute 绑定 -->
  <button :disabled="disabled">按钮</button>
  <button @click="toggleState">toggleState</button>
  <!-- 动态绑定多个 Attribute -->
  <div v-bind="attrs">我是一个方块快</div>
  <h5>3. 动态指令</h5>
  <div :title="evType" :[attrName]="attrVal" @[evType]="enHandle">我绑定了动态属性</div>
  <button @click="changeEvType">我修改动态属性</button>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';

  const user = reactive({
    name: 'Juching',
    age: 18,
    fav: null,
  });

  const disabled = ref(false);
  const attrs = reactive({
    class: 'rect rect-red',
    id: 'rect1',
  });

  function toggleState() {
    disabled.value = !disabled.value;
  }

  const attrName = ref('class');
  const attrVal = ref('');
  const evType = ref('click');
  const count = ref(0);

  const classList = ['red', 'green', 'blue'];
  function enHandle() {
    attrVal.value = classList[count.value % 3];
  }

  const evList = ['click', 'mouseenter', 'dblclick'];
  function changeEvType() {
    count.value++;
    evType.value = evList[count.value % 3];
  }
</script>

<style scoped>
  .rect {
    margin: 20px;
    width: 200px;
    height: 100px;
  }
  .rect-red {
    background: #f00;
  }

  #rect1 {
    border: 1px solid #000;
  }

  .red {
    color: red;
  }
  .green {
    color: green;
  }
  .blue {
    color: blue;
  }
</style>
