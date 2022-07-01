import { createApp } from 'vue'
import App from './App.vue'
import Model from './Model.vue'

// NOTE: [基础.01] [创建一个应用]
const app = createApp(App)  // App 作为根组件

// 应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项
// 例如定义一个应用级的错误处理器，它将捕获所有由子组件上抛而未被处理的错误：
app.config.errorHandler = () => {}
// 用于注册能够被应用内所有组件实例访问到的全局 property 的对象
// 这是对 Vue 2 中 Vue.prototype 使用方式的一种替代，此写法在 Vue 3 已经不存在了
// 与任何全局的东西一样，应该谨慎使用
app.config.globalProperties.Author = 'Juching'

// .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。
// 不同于其他资源注册方法，它的返回值是根组件实例而非应用实例
app.mount('#app')  // #app => index.html 里的根节点

// createApp 创建多应用实例
// createApp API 允许多个 Vue 应用共存于同一个页面上
// 而且每个应用都拥有自己的用于配置和全局资源的作用域
// const model = createApp(Model)
// model.mount('#model')
