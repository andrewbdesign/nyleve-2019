<template>
  <div>
    <Hero></Hero>
    <Summary></Summary>
    <Wireframing></Wireframing>
    <AppFlow></AppFlow>
    <WebDesign></WebDesign>
    <AppDesign></AppDesign>
    <MarketingCollateral></MarketingCollateral>
  </div>
</template>

<script>
import Hero from '@/views/Works/EasyBillPay/Hero.vue';
import Summary from '@/views/Works/EasyBillPay/Summary.vue';
import Wireframing from '@/views/Works/EasyBillPay/Wireframing.vue';
import AppFlow from '@/views/Works/EasyBillPay/AppFlow.vue';
import WebDesign from '@/views/Works/EasyBillPay/WebDesign.vue';
import AppDesign from '@/views/Works/EasyBillPay/AppDesign.vue';
import MarketingCollateral from '@/views/Works/EasyBillPay/MarketingCollateral.vue';

export default {
  components: {
    Hero,
    Summary,
    Wireframing,
    AppFlow,
    WebDesign,
    AppDesign,
    MarketingCollateral,
  },
};
</script>
