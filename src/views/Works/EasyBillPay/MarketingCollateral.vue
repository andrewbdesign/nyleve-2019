<template>
  <div>
    <LayoutImageList
      :title="title"
      :summary="summary"
    ></LayoutImageList>
    <LayoutContainerNoPadding>
      <div class="banner-section">
        <iframe src="http://staging.slik.com.au/qantbusinessrewards/QBR0039_QBR_Jan-Feb_Campaign/v19/airline_1/300x250/"></iframe>
        <iframe src="http://staging.slik.com.au/qantbusinessrewards/QBR0039_QBR_Jan-Feb_Campaign/v19/airline_1/300x250/"></iframe>
        <iframe src="http://staging.slik.com.au/qantbusinessrewards/QBR0039_QBR_Jan-Feb_Campaign/v19/airline_1/300x250/"></iframe>
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
    margin: 1rem 0;
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
      summary: 'After inital Wireframing and App Flow were approved it was time to move on to the design stage.',
      items: [
        'Hellow',
        'it\'s me again',
        'How are yall?',
      ],
    };
  },
};
</script>
