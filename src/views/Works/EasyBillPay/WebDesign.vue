<template>
  <LayoutImageFull
    :title="title"
    :summary="summary"
    :listTitle="listTitle"
    :items="items"
    :image="image"
    :desktop="desktop"
    :tablet="tablet"
    :mobile="mobile"
    :className="className"
  ></LayoutImageFull>
</template>

<script>
import LayoutImageFull from '@/layouts/LayoutImageFull.vue';
import LaptopTabletMobile from '@/assets/easy-bill-pay/laptop-tablet-mobile.png';

export default {
  components: {
    LayoutImageFull,
  },
  data() {
    return {
      title: 'Web Design',
      summary: 'After Initial Wireframing and App Flow were approved it was time to move on to the design stage.',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Ensure quick scan-ability in maintain across all devices and platforms.',
        'Carry out key design language/Branding set out by creative director and apply it across all pages.',
        'Roll out responsive designs across all sizes to be deliverable to developers.',
        'Design new pages that were not taken into consideration in the early stages of development.',
      ],
      image: LaptopTabletMobile,
      desktop: 'https://www.fillmurray.com/202/202',
      tablet: 'https://www.fillmurray.com/204/204',
      mobile: 'https://www.fillmurray.com/206/206',
      className: 'ebp-webdesign',
    };
  },
};
</script>
