<template>
  <LayoutHero
    :title="title"
    :summary="summary"
    :cta="cta"
  ></LayoutHero>
</template>

<script>
import LayoutHero from '@/layouts/LayoutHero.vue';

export default {
  components: {
    LayoutHero,
  },
  data() {
    return {
      title: 'Easy Bill Pay',
      summary: 'Easy Bill Pay is a service that aims to automate and organise bill payments within one place. EBP aimed to take their service to the next level by investing in creating and redesigning their web service and App. Under the supervision of a Creative Director I\'ve been given a much larger role and heavy involvement to help ensure the  product is lifted off the ground. From Web design, App design all the way through Marketing collateral, some of these roles include',
      cta: 'Go to website',
    };
  },
};
</script>
