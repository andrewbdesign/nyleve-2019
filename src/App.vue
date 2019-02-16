<template>
  <div id="app">
    <TheNav/>
    <router-view/>
    <TheFooter />
  </div>
</template>

<style lang="scss">
html {
  font-size: 10px;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  font-size: $m-size;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  font-size: $m-size;
  line-height: 1.8;
}

</style>

<script>
import TheNav from '@/components/TheNav.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheNav,
    TheFooter,
  },
};
</script>
