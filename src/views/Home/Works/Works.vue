<template>
  <div>
    <h3 class="work-title">Selected works</h3>
    <div class="works-section" v-if="works">
      <div
        class="work-tile"
        :class="work.name"
        v-for="work in works"
        :key="work.id"
        :style="{ backgroundImage: 'url(' + work.image + ')' }"
        :image="work.image"
        v-on:click="goToLink(work.url)"
      >
        <h3>{{ work.name }}</h3>
        <p>{{ work.description }}</p>
      </div>
    </div>
  </div>
  <!-- <router-link to="/works/easy-bill-pay">Easy Bill Pay</router-link> - -->
  <!-- <router-link to="/works/macquarie-telecom">Macquarie Telecom</router-link> - -->
  <!-- <router-link to="/works/king-living">King Living</router-link> - -->
  <!-- <router-link to="/works/redscope">Redscope</router-link> - -->
  <!-- <router-link to="/works/edm-html5-motion">EDM HTML5 Motion</router-link> -->
</template>

<style lang="scss" scoped>
h3 {
  padding: 0;
  margin: 0;
}
.work-title {
  font-size: $l-size;
  padding: 1em 0;
}
.works-section {
  // padding: $xl-size 0;
  .work-tile {
    background-size: cover;
    background-position: center;
    height: 100vw;
    // height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>

<script>
import TileEBP from '@/assets/work-tiles/WorkTile_EasyBillPay.jpg';
import TileKL from '@/assets/work-tiles/WorkTile_KingLiving.jpg';
import TileRedscope from '@/assets/work-tiles/WorkTile_Redscope.jpg';
import TileMacq from '@/assets/work-tiles/WorkTile_MacT.jpg';
import TileEDM from '@/assets/work-tiles/WorkTile_EDM.jpg';

export default {
  methods: {
    goToLink(url) {
      this.$router.push(`/works/${url}`);
    },
  },
  data() {
    return {
      works: [
        {
          id: 1,
          name: 'Easy Bill Pay',
          image: TileEBP,
          description: 'fill murray',
          url: 'easy-bill-pay',
        },
        {
          id: 2,
          name: 'King Living',
          image: TileKL,
          description: 'fill murray',
          url: 'king-living',
        },
        {
          id: 3,
          name: 'Redscope',
          image: TileRedscope,
          description: 'fill murray',
          url: 'redscope',
        },
        {
          id: 4,
          name: 'Macquarie Telecom',
          image: TileMacq,
          description: 'fill murray',
          url: 'macquarie-telecom',
        },
        {
          id: 5,
          name: 'EDM and banners',
          image: TileEDM,
          description: 'fill murray',
          url: 'edm-html5-motion',
        },
      ],
    };
  },
};
</script>
