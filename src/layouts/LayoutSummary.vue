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
  // .container {
  //   padding: 3.6rem 0;
  // }
  p {
    margin: 6px 0 0;
  }
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
