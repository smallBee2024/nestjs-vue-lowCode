import { createApp } from "vue";
import Antd from 'ant-design-vue';
import router from './router'
import App from './app.vue';
import 'ant-design-vue/dist/reset.css';
import '@/assets/style/common.less';

createApp(App).use(Antd).use(router).mount("#app");
