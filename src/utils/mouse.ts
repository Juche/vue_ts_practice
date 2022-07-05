import { onMounted, onUnmounted, Ref, ref } from 'vue';

import { eventListen } from './event';

interface Pos {
  x: Ref<Number>;
  y: Ref<Number>;
}

export function getMousePos(): Pos {
  console.log(`🚀 ~ getMousePos ~ 用来获取鼠标位置信息`);
  const x = ref(0);
  const y = ref(0);

  function updatePos(ev: any): void {
    x.value = ev.clientX;
    y.value = ev.clientY;
  }

  eventListen(window, 'mousemove', updatePos);

  // onMounted(() => {
  //   window.addEventListener('mousemove', updatePos);
  // });

  // onUnmounted(() => {
  //   window.removeEventListener('mousemove', updatePos);
  // });

  return { x, y };
}
