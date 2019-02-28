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
      title: 'Redscope',
      summary: 'As a freelancer i was approached by video content creators Redscope and was given the chance to design their website. I was responsible for gathering all necessary content and distilling the very essence of what they are about and what they do in order for them to step forward and approach potential clients with confidence. Ever since launch the website has helped Redscope land big clients such as Sony, Adidas & Hype DC',
      cta: 'Go to website',
    };
  },
};
</script>
