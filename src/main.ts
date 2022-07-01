import { createApp } from 'vue'
import App from './App.vue'
import Model from './Model.vue'

// NOTE: [基础.01][创建一个应用](https://staging-cn.vuejs.org/guide/essentials/application.html)
const app = createApp(App)  // App 作为根组件

// 应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项
// 例如定义一个应用级的错误处理器，它将捕获所有由子组件上抛而未被处理的错误：
app.config.errorHandler = () => {}

// .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。
// 不同于其他资源注册方法，它的返回值是根组件实例而非应用实例
app.mount('#app')  // #app => index.html 里的根节点

// createApp 创建多应用实例
// createApp API 允许多个 Vue 应用共存于同一个页面上
// 而且每个应用都拥有自己的用于配置和全局资源的作用域
const model = createApp(Model)
model.mount('#model')
