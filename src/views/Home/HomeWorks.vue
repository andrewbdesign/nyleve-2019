<template>
  <div class="works-container" v-if="works">
    <BaseThumbnail
        v-for="work in works"
        :key="work.id"
        :name="work.name"
        :image="work.image"
        :description="work.description"
      >
      </BaseThumbnail>
  </div>
</template>

<style lang="scss" scoped>
.works-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: $m-size 0;
}
</style>


<script>
import BaseThumbnail from '@/components/BaseThumbnail.vue';

export default {
  components: {
    BaseThumbnail,
  },
  data() {
    return {
      works: [
        {
          id: 1,
          name: 'Easy Bill Pay',
          image: 'https://www.fillmurray.com/200/201',
          description: 'fill murray',
        },
        {
          id: 2,
          name: 'Furniture King',
          image: 'https://www.fillmurray.com/201/200',
          description: 'fill murray',
        },
        {
          id: 3,
          name: 'Stuff 2',
          image: 'https://www.fillmurray.com/201/201',
          description: 'fill murray',
        },
        {
          id: 4,
          name: 'Stuff 3',
          image: 'https://www.fillmurray.com/200/200',
          description: 'fill murray',
        },
      ],
    };
  },
};
</script>
