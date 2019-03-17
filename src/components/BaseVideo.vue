<template>
  <div class="base-video" v-if="mp4">
    <video autoplay loop muted>
      <source :src="mp4" type="video/mp4">
      <source :src="webm" type="video/webm">
    </video>
    <div v-if="desktop">
      <p class="">Image Gallery (Closer look)</p>
      <a v-if="desktop" :href="desktop">Desktop</a> |
      <a v-if="tablet" :href="tablet">Tablet</a> |
      <a v-if="mobile" :href="mobile">Mobile</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-video {
  text-align: center;
  img, video {
    width: 70%;
    margin: 0;
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
      margin: 4em 0;
      width: 100%;
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
    mp4: {
      type: String,
      required: false,
    },
    webm: {
      type: String,
      required: false,
    },
    desktop: {
      type: String,
      required: false,
    },
    tablet: {
      type: String,
      required: false,
    },
    mobile: {
      type: String,
      required: false,
    },
    className: {
      type: String,
      require: false,
    },
  },
};
</script>
