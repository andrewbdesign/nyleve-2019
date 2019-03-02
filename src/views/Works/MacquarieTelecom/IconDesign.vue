<template>
  <div>
    <LayoutImageFullList
      :title="title"
      :listTitle="listTitle"
      :items="items"
      :mobile="mobile"
      :tablet="tablet"
      >
      <div class="icon-group">
        <img :src="icon1"/>
        <img :src="icon2"/>
        <img :src="icon3"/>
      </div>
      <BaseButton msg="Go to Website" />
    </LayoutImageFullList>
  </div>
</template>

<style lang="scss" scoped>
.icon-group {
  display: flex;
  justify-content: space-around;
  padding: 4rem 0;
  img {
    width: 30%;
    height: 30%;
  }
}

@media screen and (max-width: 738px) {
  .icon-group {
    flex-direction: column;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>


<script>
import LayoutImageFullList from '@/layouts/LayoutImageFullList.vue';
import BaseButton from '@/components/BaseButton.vue';
import icon01 from '@/assets/macq-telecom/icon-01.png';
import icon02 from '@/assets/macq-telecom/icon-02.png';
import icon03 from '@/assets/macq-telecom/icon-03.png';

export default {
  components: {
    LayoutImageFullList,
    BaseButton,
  },
  data() {
    return {
      title: 'Icon Design & Image optimisation',
      listTitle: 'Key considerations & responsibilites',
      items: [
        'Designing icons to be integrated into the website while adhering their branding style',
        'Implementing new exporting system to raise work efficiency for up to over 65%',
        'Optimising images for all platforms and sizes',
      ],
      icon1: icon01,
      icon2: icon02,
      icon3: icon03,
      desktop: 'https://www.fillmurray.com/202/202',
      tablet: 'https://www.fillmurray.com/204/204',
      mobile: 'https://www.fillmurray.com/206/206',
    };
  },
};
</script>
