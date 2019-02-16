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
h1, h2 {
  margin: 0;
}
h2 {
  font-size: 1.9rem;
  margin: 0;
}
p {
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 20px 0 0;
}
li, a {
  font-size: 1.5rem;
  line-height: 1.6;
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
