<template>
  <LayoutHero
    :title="title"
    :summary="summary"
    :cta="cta"
    :heroImage="heroImage"
  ></LayoutHero>
</template>

<script>
import LayoutHero from '@/layouts/LayoutHero.vue';
import HeroImage from '@/assets/macq-telecom/hero-macq.jpg';

export default {
  components: {
    LayoutHero,
  },
  data() {
    return {
      title: 'Macquarie Telecom',
      summary: 'One of Australia\'s leading Telecommunication services. My main role was to help optimise and and carry out responsive roll outs of their newly redesign website.',
      cta: 'Go to website',
      heroImage: HeroImage,
    };
  },
};
</script>
