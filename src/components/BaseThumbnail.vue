<template>
  <div class="thumbnail">
    <h1> {{ name }} </h1>
    <img
      :src="image"
      :alt="description"
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
  .thumbnail {
    width: 200px;
    height: 200px;
    display: inline-block;
    background: #000;
    position: relative;
    overflow: hidden;
    h1 {
      position: absolute;
      color: #fff;
      z-index: 30;
      text-align: center;
      font-size: 12px;
      margin: 0 auto;
      left: 0;
      right: 0;
      top: 80px;
    }
    img {
      opacity: 0.7;
    }
  }
</style>
