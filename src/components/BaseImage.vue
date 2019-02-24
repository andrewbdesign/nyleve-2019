<template>
  <div class="base-image" v-if="image">
    <img
      :src="image"
      alt="phone"
      :class="className"
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
  .ebp-wireframe {
    padding-top: 2rem;
  }
}
@media screen and (min-width: 780px){
  .base-image {
    .ebp-mobile {
      margin: 0;
      width: 70%;
    }
    .ebp-wireframe {
      margin: 0;
      width: 90%;
      padding-top: 4rem;
    }
    .ebp-webdesign {
      width: 80%;
      padding: 4rem 0;
    }
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
    className: {
      type: String,
      require: false,
    },
  },
};
</script>
