<template>
  <div id="nav">
    <LayoutContainerNoPadding>
      <div class="menu-container">
        <div class="logo">
          <router-link to="/">Nyleve Alejandrino</router-link>
        </div>
        <div class="menu-items">
          <router-link to="/">Home</router-link>
          <!-- <router-link to="/">Selected works</router-link> -->
          <p @click="scrollToWorks">Selected works</p>
        </div>
      </div>
    </LayoutContainerNoPadding>
  </div>
</template>

<script>
import LayoutContainerNoPadding from '@/layouts/LayoutContainerNoPadding.vue';
import { TweenLite } from 'gsap';

export default {
  components: {
    LayoutContainerNoPadding,
  },
  methods: {
    scrollToWorks() {
      TweenLite.to(window, 1.2, { scrollTo: '#works', ease: 'Power1.easeOut' })
    }
  },
};
</script>

<style lang="scss">
#nav {
  background: $greyDark;
  color: #fff;
  padding: 20px;
  a, p {
    color: #fff;
    font-size: $s-size;
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    margin: 0;
    cursor: pointer;
  }
  .menu-container {
    display: flex;
    justify-content: space-between;
  }
  .menu-items {
    p {
      display: inline-block;
    }
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
    #nav a, #nav p {
      font-size: $m-size;
    }
  }
</style>
