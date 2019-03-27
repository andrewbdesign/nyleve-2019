<template>
  <div id="works">
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
        &nbsp;
        <span class="gradient-title"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3, p {
  padding: 0;
  margin: 0;
}
.work-title {
  font-size: $l-size;
  padding: 1em 0;
}
.work-tile {
  color: #fff;
  text-align: left;
  background-size: cover;
  background-position: 0% 50%;
  height: 100vw;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  h3, p {
    position: absolute;
    left: 3%;
    z-index: 300;
  }
  h3 {
    bottom: 35px;
  }
  p {
    bottom: 10px;
  }
}

.gradient-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
}

.works-section div:nth-child(1),
.works-section div:nth-child(4) {
  h3, p {
    color: #000;
  }
  .gradient-title {
    opacity: 0.2;
  }
}

@media screen and (min-width: 640px) {
  .work-tile {
    width: 50%;
    height: 50vw;
    display: inline-flex;
  }
  .works-section div:last-child {
    width: 100%;
  }
}

@media screen and (min-width: 900px) {
  .work-tile {
    width: 33.33%;
    height: 38vh;
    min-height: 290px;
    max-height: 290px;
  }
  .works-section div:last-child {
    width: 66.67%;
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
          description: 'Web design & Graphics',
          url: 'easy-bill-pay',
        },
        {
          id: 2,
          name: 'King Living',
          image: TileKL,
          description: 'UI/UX Design',
          url: 'king-living',
        },
        {
          id: 3,
          name: 'Redscope',
          image: TileRedscope,
          description: 'Web design',
          url: 'redscope',
        },
        {
          id: 4,
          name: 'Macquarie Telecom',
          image: TileMacq,
          description: 'App design',
          url: 'macquarie-telecom',
        },
        {
          id: 5,
          name: 'EDM and banners',
          image: TileEDM,
          description: 'Marketing collateral',
          url: 'edm-html5-motion',
        },
      ],
    };
  },
};
</script>
