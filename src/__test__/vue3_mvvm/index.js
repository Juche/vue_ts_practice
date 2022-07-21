function whenDepsChange(update) {
  const effect = () => {
    activeEffect = effect;
    update();
    activeEffect = null;
  };
  effect();
}

let activeEffect;
function track(tar, key) {
  if (activeEffect) {
    const effects = getSubscribersForProperty(tar, key);
    effects.push(activeEffect);
  }
}
function trigger(tar, key) {
  const effects = getSubscribersForProperty(tar, key);
  effects.forEach((effect) => effect());
}

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      // 追踪依赖
      track(target, key);
      return target[key];
    },
    set(target, key, value) {
      // 触发作用
      trigger(target, key);
      target[key] = value;
    },
  });
}

function ref(value) {
  const refObj = {
    get value() {
      // 追踪依赖
      track(refObj, 'value');
      return value;
    },
    set value(newVal) {
      // 触发作用
      trigger(refObj, 'value');
      value = newVal;
    },
  };

  return refObj;
}

let a0 = ref(1);
console.log(`🚀 ~ a0`, a0);
let a1 = ref(2);
console.log(`🚀 ~ a1`, a1);
let a2 = ref();
console.log(`🚀 ~ a2`, a2);

let obj = reactive({
  a: '1',
});
// function update(params) {
//   a2 = a0 + a1;
// }
