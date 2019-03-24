<template>
  <div class="about">
    <LayoutContainer>
      <div class="about-section">
        <div class="about-image">
          <img src="https://www.fillmurray.com/300/300" />
        </div>
        <div class="about-description">
          <h1>{{ title }}</h1>
          <p>{{ msg }}</p>
          <BaseButton
            @click.native="downloadResume"
            msg="Download resume"
          />
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>

<style lang="scss" scoped>
.about {
  background: #242424;
  color: #fff;
  padding: 4em 0;
  h1 {
    margin-top: 1em;
  }
}
@media screen and (min-width: 540px) {
  .about {
    h1 {
      margin-top: 0;
    }
    .about-section {
      display: flex;
      align-items: center;
      .about-description {
        text-align: left;
        padding-left: 2em;
      }
    }
  }
}
</style>


<script>
import LayoutContainer from '@/layouts/LayoutContainer.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  methods: {
    downloadResume() {
      console.log('downloading resume...');
    },
  },
  components: {
    LayoutContainer,
    BaseButton,
  },
  data() {
    return {
      title: 'About',
      msg: 'Hello there, my name is Nyleve Alejandrino. I am a multi-disciplinary designer with a focus on Web and Graphic who takes pleasure in planning, developing and creating goal driven projects and watching them come to life and deliver results',
    };
  },
};
</script>
