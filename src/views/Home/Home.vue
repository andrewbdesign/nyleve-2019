<template>
  <div class="home">
    <LayoutContainer>
        <h1>Nyleve 'The Designer' Alejandrino</h1>
        <p>"Sometimes you gotta do what you gotta do" - circa 2016</p>
        <HomeWorks></HomeWorks>
        <BaseButton
          @click.native="toWorksPage"
          msg="See all works"
        />
    </LayoutContainer>
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
import BaseButton from '@/components/BaseButton.vue';
import HomeWorks from '@/views/Home/HomeWorks.vue';
import LayoutContainer from '@/layouts/LayoutContainer.vue';
import About from '@/views/Home/About/About.vue';

export default {
  components: {
    BaseButton,
    HomeWorks,
    LayoutContainer,
    About,
  },
  methods: {
    toWorksPage() {
      this.$router.push('easy-bill-pay');
    },
  },
};
</script>
