import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import 'normalize.css';
import '@/styles/main.scss';

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
