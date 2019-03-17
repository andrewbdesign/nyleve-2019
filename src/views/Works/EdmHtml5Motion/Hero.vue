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
import HeroImage from '@/assets/edm/hero-edm.jpg';

export default {
  components: {
    LayoutHero,
  },
  data() {
    return {
      title: 'EDM HTML5 Motion',
      summary: 'A beloved Australian furniture retail chain that focuses on sleek designer chairs. My main role for this brand was to carry out responsive roll outs of the desktop designs of the intricate and relatively large eCommerce website store.',
      cta: 'Go to website',
      heroImage: HeroImage,
    };
  },
};
</script>
