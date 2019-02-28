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
import Laptop from '@/assets/easy-bill-pay/EBP-wireframe-section.png';

export default {
  components: {
    LayoutImageFull,
  },
  data() {
    return {
      title: 'Wireframeing & UI/UX (Web Portal & App)',
      summary: 'As the web portal and App must have a unison sense of flow it was essential from the very early stages to have this in mind. My role during the wire framing stage was to work on and expand the ideas of the Creative Director to make sure his design thinking and solution is reflected on every necessary page/section of the Web Portal/App. One of the major challenges was breaking down large chunks of information such as types of bills, the history of bills being paid, when and how they will be paid and arranging it across the web portal/app to have it quickly readable and have a sense intuitiveness when navigating to and from these pages.',
      listTitle: 'Key considerations & Responsibilities',
      items: [
        'Maintenance of core functionality and design language when expanding into creation of other pages.',
        'Applying an intuitive feeling when designing navigation to and from other pages.',
        'Thinking modular in terms of sections that would would need little to no arrangement adjustments when applied to different pages.',
        'Responsive design arrangement with 3 breakpoints to allow functionality across devices.',
        'Functionality that would be applicable and interchangeable to both the web portal and mobile app to ensure all changes would be reflected from one platform to the other.',
        'Apply Intuitive sense of arrangement and information architecture as to not cause information overload.',
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
