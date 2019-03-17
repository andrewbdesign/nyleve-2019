<template>
  <div>
    <h3>Selected works</h3>
    <div class="works-section" v-if="works">
      <div
        class="work-tile"
        :class="work.name"
        v-for="work in works"
        :key="work.id"
        :style="{ backgroundImage: 'url(' + work.image + ')' }"
        :image="work.image"
      >
        <h3>{{ work.name }}</h3>
        <p>{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  padding: 0;
  margin: 0;
}
h3, p {
  opacity: 0;
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
  data() {
    return {
      works: [
        {
          id: 1,
          name: 'Easy Bill Pay',
          image: TileEBP,
          description: 'fill murray',
        },
        {
          id: 2,
          name: 'King Living',
          image: TileKL,
          description: 'fill murray',
        },
        {
          id: 3,
          name: 'Redscope',
          image: TileRedscope,
          description: 'fill murray',
        },
        {
          id: 4,
          name: 'Macquarie Telecom',
          image: TileMacq,
          description: 'fill murray',
        },
        {
          id: 5,
          name: 'EDM and banners',
          image: TileEDM,
          description: 'fill murray',
        },
      ],
    };
  },
};
</script>
