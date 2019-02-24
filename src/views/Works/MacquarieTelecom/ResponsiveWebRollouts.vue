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
import Laptop from '@/assets/easy-bill-pay/EBP-wireframe-section.png';

export default {
  components: {
    LayoutImageFullList,
  },
  data() {
    return {
      title: 'Responsive Web Rollouts',
      listTitle: 'Key considerations & responsibilites',
      items: [
        'Responsive Roll outs with 3 break points for entirety of website',
        'Maintenance of functionality look and feel',
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
