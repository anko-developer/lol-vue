import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import 'virtual:svg-icons-register';
// import '@/assets/scss/index.scss';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);
app.use(router);
app.mount('#app');
