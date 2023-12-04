import { createApp } from 'vue';
import App from './views/index.vue';
import { router } from './router/index.js';
import store from './store/index.js';

import 'github-markdown-css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/iconfont/iconfont.css';

import '@/css/index.scss';

if (process.env.Env.MOCK_OPEN) {
  require('./mock/index');
}
const app = createApp(App);
app.use(ElementPlus).use(store).use(router).mount('#app');
// app.use(ElementPlus).use(store).mount('#app');
