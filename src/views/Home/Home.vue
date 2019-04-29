<template>
  <div class="home">
    <Hero></Hero>
    <Works></Works>
    <About></About>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background: #f2f2f2;
  text-align: center;
}
</style>


<script>
import Hero from '@/views/Home/Hero/Hero.vue';
import Works from '@/views/Home/Works/Works.vue';
import About from '@/views/Home/About/About.vue';

export default {
  components: {
    Hero,
    Works,
    About,
  },
  methods: {
    toWorksPage() {
      this.$router.push('easy-bill-pay');
    },
  },
};
</script>
