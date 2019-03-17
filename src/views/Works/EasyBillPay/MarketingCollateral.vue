<template>
  <div>
    <LayoutImageList
      :title="title"
      :summary="summary"
      :items="items"
    ></LayoutImageList>
    <LayoutContainerNoPadding>
      <div class="banner-section">
        <iframe src="https://300x250concepta-cpml2h40f.now.sh/"></iframe>
        <iframe src="https://300x250conceptb-50pb9emh3.now.sh/"></iframe>
        <iframe src="https://300x250conceptd-4ae6f0rny.now.sh/"></iframe>
      </div>
    </LayoutContainerNoPadding>
  </div>
</template>

<style lang="scss" scoped>
.banner-section {
  padding: 0 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  iframe {
    border: 0;
    text-align: center;
    display: block;
    margin: 1rem auto;
    width: 300px;
    height: 250px;
  }
}
@media screen and (min-width: 1220px){
  .banner-section {
    flex-direction: row;
    justify-content: space-between;
    iframe {
      margin: 0 auto;
    }
  }
}
</style>


<script>
import LayoutImageList from '@/layouts/LayoutImageList.vue';
import LayoutContainerNoPadding from '@/layouts/LayoutContainerNoPadding.vue';

export default {
  components: {
    LayoutImageList,
    LayoutContainerNoPadding,
  },
  data() {
    return {
      title: 'Marketing Collateral',
      summary: 'After a soft launch i was given the task to work on the marketing collateral to promote the product.',
      items: [
        'Design and development of web mail content.',
        'Design and development of animated HTML 5 Banners to promote the core functionality of the product.',
      ],
    };
  },
};
</script>
