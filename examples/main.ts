import { createApp } from 'vue';
import App from './App.vue';
import { formLinkage } from '../packages'
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)
app.use(formLinkage)
app.mount('#app')
