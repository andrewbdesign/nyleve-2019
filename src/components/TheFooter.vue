<template>
  <footer class="footer">
    <LayoutContainerNoPadding>
      <div class="footer-content">
        <BaseButton
          @click.native="downloadResume"
          msg="Download resume"
          color="#99cdff"
        />
        <div>
          <p>
            <a href="mailto:nylevealejandrino@gmail.com">nylevealejandrino@gmail.com</a> | 
            <a href="https://www.facebook.com/tontonlives" target="_blank">Facebook</a> | 
            <a href="https://linkedin.com/in/nylevealejandrino" target="_blank">LinkedIn</a> </p>
        </div>
        <div>
          <p @click="scrollTop">Back to top</p>
        </div>
      </div>
    </LayoutContainerNoPadding>
  </footer>
</template>

<script>
import LayoutContainerNoPadding from '@/layouts/LayoutContainerNoPadding.vue';
import BaseButton from '@/components/BaseButton.vue';
import { TweenLite } from 'gsap';

export default {
  methods: {
    downloadResume() {
      alert('downloading resume...');
    },
    scrollTop() {
      TweenLite.to(window, 1.2, { scrollTo: '#nav', ease: 'Power1.easeOut' });
    },
  },
  components: {
    LayoutContainerNoPadding,
    BaseButton,
  },
};
</script>

<style lang="scss">
.footer {
  background: #ebebeb;
  color: #000;
  font-size: $s-size;
  text-align: center;
  p {
    margin: 0;
    cursor: pointer;
  }
  @media screen and (min-width: 810px){
    .footer-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
