<template>
  <div class="layout-image-full-list red-animation-section">
    <LayoutContainer>
      <h2 v-if="title"> {{ title }} </h2>
      <p v-if="summary"> {{ summary }} </p>
      <BaseList
        :items="items"
        :listTitle="listTitle"
      ></BaseList>
      <Showreel></Showreel>
      <BaseButton msg="Go to website"></BaseButton>
    </LayoutContainer>
  </div>
</template>

<style lang="scss">
.red-animation-section {
  background: #141414;
  color: #fff;
}
</style>


<script>
import LayoutContainer from '@/layouts/LayoutContainer.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseList from '@/components/BaseList.vue';
import Showreel from '@/views/Works/Redscope/Showreel.vue';

export default {
  components: {
    LayoutContainer,
    BaseButton,
    BaseList,
    Showreel,
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
    };
  },
};
</script>
