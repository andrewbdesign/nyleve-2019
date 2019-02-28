<template>
  <LayoutImageFullList
    :title="title"
    :listTitle="listTitle"
    :items="items"
    :image="image"
    :desktop="desktop"
    :tablet="tablet"
    :mobile="mobile"
    :className="className"
  ></LayoutImageFullList>
</template>

<script>
import LayoutImageFullList from '@/layouts/LayoutImageFullList.vue';
import Laptop from '@/assets/king-living/kl-responsive.png';

export default {
  components: {
    LayoutImageFullList,
  },
  data() {
    return {
      title: 'Responsive Web Rollouts',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Responsive Roll outs with 4 break points of the intricate designs of the creative director on all platforms and devices whilst maintaining its functionality, look & feel.',
      ],
      image: Laptop,
      desktop: 'https://www.fillmurray.com/202/202',
      tablet: 'https://www.fillmurray.com/204/204',
      mobile: 'https://www.fillmurray.com/206/206',
      className: 'macq-web-roll-outs',
    };
  },
};
</script>
