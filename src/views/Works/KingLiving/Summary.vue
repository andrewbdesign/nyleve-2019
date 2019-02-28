<template>
  <LayoutSummary
    :title="title"
    :summary="summary"
  ></LayoutSummary>
</template>

<script>
import LayoutSummary from '@/layouts/LayoutSummary.vue';

export default {
  components: {
    LayoutSummary,
  },
  data() {
    return {
      title: 'Main roles & Responsibilities',
      summary: 'Responsive Web Rollout, Minor Page Design, Photo Touching, Testing',
    };
  },
};
</script>
