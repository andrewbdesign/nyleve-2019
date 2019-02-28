<template>
  <LayoutImageFull
    :title="title"
    :summary="summary"
    :listTitle="listTitle"
    :items="items"
    :image="image"
    :className="className"
  >
    <BaseButton msg="Go to website"></BaseButton>
  </LayoutImageFull>
</template>

<script>
import LayoutImageFull from '@/layouts/LayoutImageFull.vue';
import BaseButton from '@/components/BaseButton.vue';
import Laptop from '@/assets/easy-bill-pay/EBP-wireframe-section.png';

export default {
  components: {
    LayoutImageFull,
    BaseButton,
  },
  data() {
    return {
      title: 'Animation & Video Editing',
      summary: 'Redscope was willing to give me access to the raw video files of the work they were most proud of. Going through these works i extracted and patched together the moments deemed as their best work as videographers. To further the concept of videos as moving still images, I found any chance to animated the more static images of the website.',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Utilisation of After effects to mock up final CSS animations',
        'Distillation of Redscopes best work into a 15-30 second video hero banner',
        'Decreased website loading time by 65% by Video optimisation',
        'Ensure all images and animations are low',
      ],
      image: Laptop,
      className: 'ebp-wireframe',
    };
  },
};
</script>
