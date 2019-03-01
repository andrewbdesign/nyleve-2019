<template>
  <div>
    <LayoutImageFullList
      :title="title"
      :listTitle="listTitle"
      :items="items"
      :image="image"
      :mobile="mobile"
      :tablet="tablet"
      :laptop="laptop"
      >
      <!-- <div class="icon-group">
        <img :src="laptop"/>
        <img :src="laptop"/>
        <img :src="laptop"/>
      </div> -->
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
</style>


<script>
import LayoutImageFullList from '@/layouts/LayoutImageFullList.vue';
import BaseButton from '@/components/BaseButton.vue';
import Laptop from '@/assets/easy-bill-pay/EBP-wireframe-section.png';

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
      laptop: Laptop,
    };
  },
};
</script>
