<template>
  <div>
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
  </div>
</template>

<script>
import LayoutImageRight from '@/layouts/LayoutImageRight.vue';
import Mobile from '@/assets/redscope/red-graphic-design-section.png';

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
      desktop: 'https://www.fillmurray.com/202/202',
      tablet: 'https://www.fillmurray.com/204/204',
      mobile: 'https://www.fillmurray.com/206/206',
    };
  },
};
</script>
