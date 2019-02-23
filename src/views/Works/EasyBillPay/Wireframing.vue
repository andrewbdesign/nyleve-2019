<template>
  <!-- <LayoutImageLeft
    :title="title"
    :summary="summary"
    :listTitle="listTitle"
    :items="items"
    :image="image"
    :desktop="desktop"
    :tablet="tablet"
    :mobile="mobile"
    :className="className"
  ></LayoutImageLeft> -->
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
import Laptop from '@/assets/easy-bill-pay/EBP-wireframe-section.png';

export default {
  components: {
    LayoutImageFull,
  },
  data() {
    return {
      title: 'Wireframeing & UI/UX (Web Portal & App)',
      summary: 'As the web protal and App must have a unison sense of flow it was essential from the very earl stages to have this in mind. My role during the wire framing stage was to wok on and expand the ideas of the Creative Director to make sure his design thinking and solution is reflected on every necessary page/section of the Web Portal/App.',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Maintenance of core functionality and design language when expanding into creation of other pages',
        'Applying an intuitive feeling when designing navigation to and from other pages',
        'Thinking modular in terms of sections that would need little to no arragement when applied to different pages',
        'Arrangement with a sense of responsive design in mind to allow functionality across all devices',
        'Functionality interchangeable to both the web portal and mobile app to ensure all changes would be reflected from on platform to the other',
        'Apply intuitive sense arrangement and information architecture as to not cause information overload',
      ],
      image: Laptop,
      desktop: 'https://www.fillmurray.com/202/202',
      tablet: 'https://www.fillmurray.com/204/204',
      mobile: 'https://www.fillmurray.com/206/206',
      className: 'ebp-wireframe',
    };
  },
};
</script>
