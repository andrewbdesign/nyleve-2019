<template>
  <LayoutImageFullList
    :title="title"
    :listTitle="listTitle"
    :items="items"
  >
    <div class="icon-group">
      <img :src="laptop"/>
      <img :src="laptop"/>
      <img :src="laptop"/>
    </div>
  </LayoutImageFullList>
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
import Laptop from '@/assets/easy-bill-pay/EBP-wireframe-section.png';

export default {
  components: {
    LayoutImageFullList,
  },
  data() {
    return {
      title: 'Phototouching',
      listTitle: 'Key considerations & responsibilities',
      items: [
        'Photo touching products and images to make sure it fits the style and branding.',
      ],
      laptop: Laptop,
    };
  },
};
</script>
