<template>
  <LayoutImageRight
    :title="title"
    :summary="summary"
    :listTitle="listTitle"
    :items="items"
    :image="image"
    :desktop="desktop"
    :tablet="tablet"
    :mobile="mobile"
    :className="className"
  ></LayoutImageRight>
</template>

<script>
import LayoutImageRight from '@/layouts/LayoutImageRight.vue';
import Mobile from '@/assets/easy-bill-pay/mobile.png';

export default {
  components: {
    LayoutImageRight,
  },
  data() {
    return {
      title: 'Graphic Design',
      summary: 'Another task was to gather and extrapolate their stunning video stills and images to enhance the look and feel of their website.',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Photo touching and manipulation',
        'Image extraction and design execution',
      ],
      image: Mobile,
      className: 'ebp-mobile',
    };
  },
};
</script>
