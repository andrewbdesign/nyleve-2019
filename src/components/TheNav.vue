<template>
  <div id="nav">
    <LayoutContainerNoPadding>
      <router-link to="/">Home</router-link> -
      <router-link to="/works/easy-bill-pay">Easy Bill Pay</router-link> -
      <router-link to="/works/macquarie-telecom">Macquarie Telecom</router-link> -
      <router-link to="/works/king-living">King Living</router-link> -
      <router-link to="/works/redscope">Redscope</router-link> -
      <router-link to="/works/edm-html5-motion">EDM HTML5 Motion</router-link>
    </LayoutContainerNoPadding>
  </div>
</template>

<script>
import LayoutContainerNoPadding from '@/layouts/LayoutContainerNoPadding.vue';

export default {
  components: {
    LayoutContainerNoPadding,
  },
};
</script>

<style lang="scss">
#nav {
  background: $greyDark;
  color: #fff;
  padding: 20px;
  a {
    color: #fff;
    font-size: $m-size;
    display: inline-block;
    // margin-right: 10px;
    text-decoration: none;
  }
}
  @media screen and (min-width: $tablet) {
    #nav {
      padding: 20px 0;
    }
  }
</style>
