<template>
  <LayoutVideoRight
    :title="title"
    :summary="summary"
    :listTitle="listTitle"
    :items="items"
    :mp4="mp4"
    :webm="webm"
    :desktop="desktop"
    :tablet="tablet"
    :mobile="mobile"
    :className="className"
  ></LayoutVideoRight>
</template>

<script>
import LayoutVideoRight from '@/layouts/LayoutVideoRight.vue';
import mp4 from '@/assets/easy-bill-pay/app-design-section.mp4';
import webm from '@/assets/easy-bill-pay/app-design-section.webm';

export default {
  components: {
    LayoutVideoRight,
  },
  data() {
    return {
      title: 'UI/UX App Design',
      summary: 'While the Webportal had taken first and foremost priority, when developing the Mobile App, the team decided to take most of the core functionality and design of the webportal to allow us to proceed into the design stage much faster',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'make sure the core functionality mirrors the web portal, while creating a different feel design wise',
        'To create this different design feel to create a clear separation of the web portal and mobile app, different design colour schemes were used',
        'creation of newer graphics to create a more clear distinction between web portal and phone app',
        'Applying design to functionality that works on both android and iOS',
      ],
      mp4,
      webm,
      desktop: 'https://www.fillmurray.com/202/202',
      tablet: 'https://www.fillmurray.com/204/204',
      mobile: 'https://www.fillmurray.com/206/206',
      className: 'ebp-mobile app-design-ebp',
    };
  },
};
</script>
