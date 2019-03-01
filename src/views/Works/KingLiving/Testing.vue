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
import Mobile from '@/assets/king-living/kl-testing.png';

export default {
  components: {
    LayoutImageRight,
  },
  data() {
    return {
      title: 'Testing',
      summary: 'My role during this stage was creating the App flow for one of the most important components of the app which is adding a bill into the system that would allow choice for',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Making sure every PSD file from desktop to the responsive roll out is pixel perfect before handing in over to developer.',
        'Ensuring all functionality and feel is in working order during the testing phase and communicating necessary changes to the developers.',
      ],
      image: Mobile,
      desktop: 'https://www.fillmurray.com/202/202',
      tablet: 'https://www.fillmurray.com/204/204',
      mobile: 'https://www.fillmurray.com/206/206',
      className: 'kl-mobile',
    };
  },
};
</script>
