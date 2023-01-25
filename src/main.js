import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './routes';
import 'virtual:svg-icons-register';
// import '@/assets/scss/index.scss';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount('#app');
