import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './routes';
import globalComponents from './plugins/global-components';
import 'virtual:svg-icons-register';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/scss/index.scss';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(globalComponents);
app.use(pinia);
app.mount('#app');
