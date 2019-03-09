<template>
  <div class="hero" :style="{ backgroundImage: 'url(' + this.heroImage + ')' }">
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
  background-size: cover;
  color: #fff;
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
    heroImage: {
      type: String,
      required: false,
    },
  },
  components: {
    BaseButton,
    LayoutContainer,
  },
};
</script>
