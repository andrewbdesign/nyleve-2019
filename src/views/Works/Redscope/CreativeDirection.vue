<template>
  <div class="red-creative-direction">
    <LayoutImageRightTitle
      :title="title"
      :summary="summary"
      :listTitle="listTitle"
      :items="items"
      :image="image"
      :className="className"
    ></LayoutImageRightTitle>
  </div>
</template>

<style lang="scss" scoped>
.red-creative-direction {
  background: #141414;
  color: #fff;
}
</style>


<script>
import LayoutImageRightTitle from '@/layouts/LayoutImageRightTitle.vue';
import Laptop from '@/assets/easy-bill-pay/EBP-wireframe-section.png';

export default {
  components: {
    LayoutImageRightTitle,
  },
  data() {
    return {
      title: 'Creative Direction',
      summary: 'The initial concept and direction i wanted to take the website was drawn from their core ethos of creating messages through the art of story telling. With this in mind I\'ve taken every details to follow the story of who they are, what they can do and of course where to find and contact them all whilst maintaining to showcase their talent of finding beauty within the world around them.',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Wire framing and proposing look and feel of their new website.',
        'Proposal of UI/UX strategy',
        'Gathering and extrapolating all video and still images from client.',
        'Liaising with the client and developers to ensure all requirements project requirements are met.',
        'Seamless Inter-connectivity with other social media platforms',
      ],
      image: Laptop,
      className: 'redscope-creative-direction',
    };
  },
};
</script>
