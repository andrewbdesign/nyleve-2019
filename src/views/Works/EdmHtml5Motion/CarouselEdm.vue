<template>
  <div>
    <LayoutContainer>
      <carousel :perPage="1">
        <slide class="panel">
          Slide 1 Content
        </slide>
        <slide class="panel">
          Slide 2 Content
        </slide>
        <slide class="panel">
          Slide 3 Content
        </slide>
        <slide class="panel">
          Slide 4 Content
        </slide>
      </carousel>
    </LayoutContainer>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: $brandColour;

}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';
import LayoutContainer from '@/layouts/LayoutContainer.vue';

export default {
  components: {
    LayoutContainer,
    Carousel,
    Slide,
  },
};
</script>
