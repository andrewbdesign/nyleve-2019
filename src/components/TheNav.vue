<template>
  <div id="nav">
    <LayoutContainerNoPadding>
      <div class="menu-container">
        <div class="logo">
          <router-link to="/">Nyleve Alejandrino</router-link>
        </div>
        <div class="menu-items">
          <router-link to="/">Home</router-link>
          <router-link to="/">Selected works</router-link>
        </div>
      </div>
      <!-- <router-link to="/works/easy-bill-pay">Easy Bill Pay</router-link> - -->
      <!-- <router-link to="/works/macquarie-telecom">Macquarie Telecom</router-link> - -->
      <!-- <router-link to="/works/king-living">King Living</router-link> - -->
      <!-- <router-link to="/works/redscope">Redscope</router-link> - -->
      <!-- <router-link to="/works/edm-html5-motion">EDM HTML5 Motion</router-link> -->
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
    font-size: $s-size;
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
  }
  .menu-container {
    display: flex;
    justify-content: space-between;
  }
  .menu-items {
    a:first-child {
      margin: 0 20px;
    }
  }
}
  @media screen and (min-width: $tablet) {
    #nav {
      padding: 20px 0;
    }
  }
  @media screen and (min-width: 490px) {
    #nav a {
      font-size: $m-size;
    }
  }
</style>
