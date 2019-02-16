import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import About from './views/About.vue';
import EasyBillPay from './views/Works/EasyBillPay/EasyBillPay.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/easy-bill-pay',
      name: 'easybillpay',
      component: EasyBillPay,
    },
  ],
});
