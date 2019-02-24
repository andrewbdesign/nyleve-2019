<template>
  <div id="nav">
    <LayoutContainerNoPadding>
      <router-link to="/">Home</router-link> -
      <router-link to="/easy-bill-pay">Easy Bill Pay</router-link> -
      <router-link to="/macquarie-telecom">Macquarie Telecom</router-link> -
      <router-link to="/king-living">King Living</router-link>
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
