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
import HeroImage from '@/assets/king-living/hero-kl.jpg';

export default {
  components: {
    LayoutHero,
  },
  data() {
    return {
      title: 'King Living',
      summary: 'A beloved Australian furniture retail chain that focuses on sleek designer chairs. My main role for this brand was to optimize and carry out responsive roll outs of the intricate award winning design lead by the creative director.',
      cta: 'Go to website',
      heroImage: HeroImage,
    };
  },
};
</script>
