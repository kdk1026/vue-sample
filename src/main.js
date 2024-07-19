import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import { createVfm } from 'vue-final-modal'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const vfm = createVfm();

const app = createApp(App);
app.use(router);
app.use(vfm);
app.use(ToastPlugin);
app.mount('#app');
