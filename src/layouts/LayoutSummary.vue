<template>
  <div class="summary">
    <LayoutContainer>
      <h2> {{ title }} </h2>
      <p> {{ summary }} </p>
    </LayoutContainer>
  </div>
</template>

<style lang="scss" scoped>
.summary {
  background: $greyLight;
}
</style>


<script>
import LayoutContainer from '@/layouts/LayoutContainer.vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  components: {
    LayoutContainer,
  },
};
</script>
