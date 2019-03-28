<template>
  <div>
    <LayoutContainer>
      <carousel
        :perPage="1"
        autoplay
        autoplayHoverPause
        :autoplayTimeout="4000"
        :navigationEnabled="true"
        paginationColor="#dadada">
        <slide class="panel">
          <img :src="slides[0].content" />
        </slide>
        <slide class="panel">
          <img :src="slides[1].content" />
        </slide>
        <slide class="panel">
            <iframe class="mrec" src="https://300x250concepta-cpml2h40f.now.sh/"></iframe>
        </slide>
        <slide class="panel">
            <iframe class="mrec" src="https://300x250conceptb-50pb9emh3.now.sh/"></iframe>
        </slide>
        <slide class="panel">
            <iframe class="mrec" src="https://300x250conceptd-4ae6f0rny.now.sh/"></iframe>
        </slide>
        <slide class="panel">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wnG7zOZg96E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </slide>
        <slide class="panel">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qE3nCcDnaz4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  background: #333;
  img {
    width: 100%;
    height: auto;
  }
  iframe {
    border: none;
  }
  .mrec {
    width: 300px;
    height: 250px;
  }
}
button.VueCarousel-dot {
  background: pink !important;
}
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';
import LayoutContainer from '@/layouts/LayoutContainer.vue';
import KingEDM from '@/assets/edm/kingeDM_hero.png';
import RadioRental from '@/assets/edm/RadiorentalseDM_hero.png';

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
        { id: 2, content: RadioRental },
        // { id: 3, content: KingEDM },
      ],
    };
  },
};
</script>
