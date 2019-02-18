<template>
  <div id="app">
    <TheNav/>
    <router-view/>
    <TheFooter />
  </div>
</template>

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
