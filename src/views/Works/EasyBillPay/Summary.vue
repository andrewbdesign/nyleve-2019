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
      summary: 'UI/UX Design, Wireframing, App Design, Web Design, Responsive Web Rollouts, Marketing Collateral, HTML 5 Animation',
    };
  },
};
</script>
