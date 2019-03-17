<template>
  <div>
    <LayoutContainer>
      <carousel :perPage="1">
          <slide class="panel">
            <img :src="slides[0].content" />
          </slide>
          <slide class="panel">
            <img :src="slides[1].content" />
          </slide>
          <slide class="panel">
            <img :src="slides[2].content" />
          </slide>
        <!-- <slide>
          <img :src="KingEDM" />
        </slide> -->
        <!-- <slide class="panel">
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
        </slide> -->
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
import KingEDM from '@/assets/edm/kingeDM_hero.png';

export default {
  components: {
    LayoutContainer,
    Carousel,
    Slide,
  },
  data() {
    return {
      slides: [
        { id: 1, content: KingEDM },
        { id: 2, content: KingEDM },
        { id: 3, content: KingEDM },
      ],
    };
  },
};
</script>
