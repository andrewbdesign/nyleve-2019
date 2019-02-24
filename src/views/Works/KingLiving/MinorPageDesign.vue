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
      title: 'Minor Page Design',
      listTitle: 'Key considerations & responsibilites',
      items: [
        'While the creative director has taken care of the main bulk of the design, my role was to take in the design language and style laid out and apply it across pages that haven\'t been created yet and ensure it fits within the design context and website as a whole',
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
