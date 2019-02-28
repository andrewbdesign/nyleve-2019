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
      summary: 'Creative Direction, Wire framing, Web Design, Graphic Design, Responsive Webrollout, Animation & Video Editing, Web Optimisation',
    };
  },
};
</script>
