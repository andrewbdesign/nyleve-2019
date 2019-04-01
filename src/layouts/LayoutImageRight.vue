<template>
  <div class="image-right">
    <LayoutContainer>
      <LayoutHalfPage>
        <div>
          <h2 v-if="title"> {{ title }} </h2>
          <p v-if="summary"> {{ summary }} </p>
          <BaseList
            :items="items"
            :listTitle="listTitle"
          ></BaseList>
        </div>
        <BaseImage
          :image="image"
          :desktop="desktop"
          :tablet="tablet"
          :mobile="mobile"
          :className="className"
        ></BaseImage>
      </LayoutHalfPage>
    </LayoutContainer>
  </div>
</template>

<style lang="scss" scoped>
// .image-right {
//   background: $offWhite;
// }
</style>


<script>
import LayoutContainer from '@/layouts/LayoutContainer.vue';
import LayoutHalfPage from '@/layouts/LayoutHalfPage.vue';
import BaseList from '@/components/BaseList.vue';
import BaseImage from '@/components/BaseImage.vue';

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    summary: {
      type: String,
      required: false,
    },
    listTitle: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    desktop: {
      type: String,
      required: false,
    },
    tablet: {
      type: String,
      required: false,
    },
    mobile: {
      type: String,
      required: false,
    },
    className: {
      type: String,
      required: false,
    },
  },
  components: {
    LayoutContainer,
    LayoutHalfPage,
    BaseList,
    BaseImage,
  },
};
</script>
