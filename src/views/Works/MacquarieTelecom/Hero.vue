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
      title: 'Macquarie Telecom',
      summary: 'One of Australia\'s leading Telecommunication services. My main role was to help optimise and and carry out responsive roll outs of their newly redesign website.',
      cta: 'Go to website',
    };
  },
};
</script>
