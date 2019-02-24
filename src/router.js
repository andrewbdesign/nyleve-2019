import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import EasyBillPay from './views/Works/EasyBillPay/EasyBillPay.vue';
import MacquarieTelecom from './views/Works/MacquarieTelecom/MacquarieTelecom.vue';
import KingLiving from './views/Works/KingLiving/KingLiving.vue';
import Redscope from './views/Works/Redscope/Redscope.vue';
import EdmHtml5Motion from './views/Works/EdmHtml5Motion/EdmHtml5Motion.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/works/easy-bill-pay',
      name: 'easybillpay',
      component: EasyBillPay,
    },
    {
      path: '/works/macquarie-telecom',
      name: 'macquarietelecom',
      component: MacquarieTelecom,
    },
    {
      path: '/works/king-living',
      name: 'kingliving',
      component: KingLiving,
    },
    {
      path: '/works/redscope',
      name: 'redscope',
      component: Redscope,
    },
    {
      path: '/works/edm-html5-motion',
      name: 'edmhtml5motion',
      component: EdmHtml5Motion,
    },
  ],
});
