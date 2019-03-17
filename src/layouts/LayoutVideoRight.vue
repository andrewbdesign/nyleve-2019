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
        <BaseVideo
          :mp4="mp4"
          :webm="webm"
          :desktop="desktop"
          :tablet="tablet"
          :mobile="mobile"
          :className="className"
        ></BaseVideo>
      </LayoutHalfPage>
    </LayoutContainer>
  </div>
</template>

<style lang="scss" scoped>
.image-right {
  background: #d9d8d9;
}
</style>


<script>
import LayoutContainer from '@/layouts/LayoutContainer.vue';
import LayoutHalfPage from '@/layouts/LayoutHalfPage.vue';
import BaseList from '@/components/BaseList.vue';
import BaseVideo from '@/components/BaseVideo.vue';

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
    mp4: {
      type: String,
      required: false,
    },
    webm: {
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
    BaseVideo,
  },
};
</script>
