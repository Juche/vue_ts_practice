import { onMounted, onUnmounted, ref } from "vue";

export function getMousePos() {
  console.log(`🚀 ~ getMousePos ~ 用来获取鼠标位置信息`);
  const x = ref(0);
  const y = ref(0);

  function updatePos(ev: MouseEvent) {
    x.value = ev.clientX;
    y.value = ev.clientY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", updatePos)
  })

  onUnmounted(() => {
    window.removeEventListener("mousemove", updatePos)
  })

  return { x, y };
}
