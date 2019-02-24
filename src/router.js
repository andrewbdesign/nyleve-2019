import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import EasyBillPay from './views/Works/EasyBillPay/EasyBillPay.vue';
import MacquarieTelecom from './views/Works/MacquarieTelecom/MacquarieTelecom.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/easy-bill-pay',
      name: 'easybillpay',
      component: EasyBillPay,
    },
    {
      path: '/macquarie-telecom',
      name: 'macquarietelecom',
      component: MacquarieTelecom,
    },
  ],
});
