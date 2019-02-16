<template>
  <div class="hero">
    <LayoutContainer>
      <h1> {{ title }} </h1>
      <p> {{ summary }} </p>
      <BaseButton :msg="cta"></BaseButton>
    </LayoutContainer>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: $greyMedium;
}
</style>


<script>
import BaseButton from '@/components/BaseButton.vue';
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
    cta: {
      type: String,
      required: true,
    },
  },
  components: {
    BaseButton,
    LayoutContainer,
  },
};
</script>
