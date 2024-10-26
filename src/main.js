import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由

// 引入 Element Plus 和样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 创建应用实例并使用 Element Plus
const app = createApp(App);
app.use(router); // 使用路由
app.use(ElementPlus);
app.mount('#app');
