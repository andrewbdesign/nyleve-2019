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
      summary: 'My role during this stage was creating the App flow for one of the most important components of the app which is adding a bill into the system that would allow choice for',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'The design would be compatible across all devices and interchangeable between the web portal and mobile app',
        'Applying an intuitive story like flow that does not require too much cognitive load on the end user',
        'Ensuring the flow does not hit a dead end, but instead forms a cycle that would repeated allow the end user to keep adding their bills',
      ],
      image: Mobile,
      className: 'ebp-mobile',
    };
  },
};
</script>
