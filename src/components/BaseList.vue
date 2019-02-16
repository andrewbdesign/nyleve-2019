<template>
  <div>
    <p>{{ listTitle }}</p>
    <ul v-if="items">
      <li
        v-for="(item, index) in items"
        :key="index"
      > {{ item }} </li>
    </ul>
  </div>
</template>

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
