<template>
  <div>
    <p class="list-title">{{ listTitle }}</p>
    <ul v-if="items">
      <li
        v-for="(item, index) in items"
        :key="index"
      > {{ item }} </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.list-title {
  font-weight: bold;
}
ul {
  padding-left: 16px;
}
</style>


<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
    },
    listTitle: {
      type: String,
      required: false,
    },
  },
};
</script>
