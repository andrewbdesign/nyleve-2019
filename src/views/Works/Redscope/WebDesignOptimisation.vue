<template>
  <LayoutImageFull
    :title="title"
    :summary="summary"
    :listTitle="listTitle"
    :items="items"
    :image="image"
    :className="className"
  ></LayoutImageFull>
</template>

<script>
import LayoutImageFull from '@/layouts/LayoutImageFull.vue';
import Laptop from '@/assets/redscope/red-web-design.png';

export default {
  components: {
    LayoutImageFull,
  },
  data() {
    return {
      title: 'Web Design & Optimisation',
      summary: 'The main strategy was to point the end user towards their work portfolio and an easy to find call to action. One of the main challenges was finding the balance of maintaining their high quality video footage and images whilst keep the website as a whole light easy to navigate and light on data load.',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Design and execution of look and feel of their new website',
        'Implementation of appropriate UI/UX strategies to ensure end user has an understanding of who they are and their skill set capabilities',
        'Implementation of video hero banner that showcases Redscopes abilities within 15-30 seconds',
        'Decreased website loading time by 65% by Image optimisation',
        'Responsive Web roll out optimised for all devices with 3 break points',
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
