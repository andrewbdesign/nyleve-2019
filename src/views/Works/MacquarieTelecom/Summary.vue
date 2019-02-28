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
      summary: 'Responsive Webrollout & Minor Page Design, Icon Design, Image Optimisation',
    };
  },
};
</script>
