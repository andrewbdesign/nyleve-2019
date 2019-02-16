<template>
  <div class="base-image">
    <img
      :src="image"
      alt="phone"
    />
    <p class="">Image Gallery (Closer look)</p>
    <a :href="desktop">Desktop</a> |
    <a :href="tablet">Tablet</a> |
    <a :href="mobile">Mobile</a>
  </div>
</template>

<style lang="scss" scoped>
.base-image {
  text-align: center;
  img {
    width: 100%;
    margin: 1.3rem 0;
  }
  img + p {
    font-weight: bold;
    margin: 0 0 10px;
  }
  a {
    color: $link;
  }
}
</style>


<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    desktop: {
      type: String,
      required: true,
    },
    tablet: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
  },
};
</script>
