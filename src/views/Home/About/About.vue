<template>
  <div class="about">
    <LayoutContainer>
      <h1>{{ title }}</h1>
      <p>{{ msg }}</p>
    </LayoutContainer>
  </div>
</template>

<style lang="scss" scoped>
.about {
  background: #242424;
  color: #fff;
}
</style>


<script>
import LayoutContainer from '@/layouts/LayoutContainer.vue';

export default {
  components: {
    LayoutContainer,
  },
  data() {
    return {
      title: 'About',
      msg: 'Hello there, my name is Nyleve Alejandrino. I am a multi-disciplinary designer with a focus on Web and Graphic who takes pleasure in planning, developing and creating goal driven projects and watching them come to life and deliver results',
    };
  },
};
</script>
