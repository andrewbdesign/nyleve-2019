<template>
  <div class="red-graphic-design">
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
  </div>
</template>

<style lang="scss" scoped>
.red-graphic-design {
  background: #141414;
  color: #fff;
}

</style>


<script>
import LayoutImageRight from '@/layouts/LayoutImageRight.vue';
import Mobile from '@/assets/redscope/red-graphic-design-section.png';

export default {
  components: {
    LayoutImageRight,
  },
  data() {
    return {
      title: 'Graphic Design',
      summary: 'Another task was to gather and extrapolate their stunning video stills and images to enhance the look and feel of their website.',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Photo touching and manipulation',
        'Image extraction and design execution',
      ],
      image: Mobile,
      className: 'red-letter-a',
      desktop: '',
      tablet: '',
      mobile: '',
    };
  },
};
</script>
