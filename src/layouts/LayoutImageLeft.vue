<template>
  <div class="image-left">
    <LayoutContainer>
      <h2 v-if="title"> {{ title }} </h2>
      <p v-if="summary"> {{ summary }} </p>
      <LayoutHalfPage>
        <BaseImage
          :image="image"
          :desktop="desktop"
          :tablet="tablet"
          :mobile="mobile"
          :className="className"
        ></BaseImage>
        <BaseList
          :items="items"
          :listTitle="listTitle"
        ></BaseList>
      </LayoutHalfPage>
    </LayoutContainer>
  </div>
</template>

<script>
import LayoutContainer from '@/layouts/LayoutContainer.vue';
import LayoutHalfPage from '@/layouts/LayoutHalfPage.vue';
import BaseImage from '@/components/BaseImage.vue';
import BaseList from '@/components/BaseList.vue';

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
    BaseImage,
    BaseList,
  },
};
</script>
