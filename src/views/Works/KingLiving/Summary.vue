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
      summary: 'UI/UX Design, Wireframing, App Design, App rollout, Web Design, Responsive Webrollouts, Marketing Design, Marketing Animation',
    };
  },
};
</script>
