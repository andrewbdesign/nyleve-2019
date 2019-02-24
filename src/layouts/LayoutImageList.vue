<template>
  <div>
    <LayoutContainer>
    <h2>{{ title }}</h2>
    <p>{{ summary }}</p>
    <ul v-if="items">
      <li
        v-for="(item, index) in items"
        :key="index"
        >{{ item }}</li>
    </ul>
    </LayoutContainer>
  </div>
</template>

<script>
import LayoutContainer from '@/layouts/LayoutContainer.vue';

export default {
  components: {
    LayoutContainer,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: false,
    },
  },
};
</script>
