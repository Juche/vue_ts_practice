import { onMounted, onUnmounted } from 'vue';

export function eventListen(tar: Window, ev: string, cb: EventListenerOrEventListenerObject): void {
  onMounted(() => {
    tar.addEventListener(ev, cb);
  });

  onUnmounted(() => {
    tar.removeEventListener(ev, cb);
  });
}
