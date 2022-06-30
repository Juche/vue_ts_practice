import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)  // App 作为根组件

// .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。
// 不同于其他资源注册方法，它的返回值是根组件实例而非应用实例
app.mount('#app')  // #app => index.html 里的根节点
