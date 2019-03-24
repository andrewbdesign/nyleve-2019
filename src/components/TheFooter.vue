<template>
  <footer class="footer">
    <LayoutContainerNoPadding>
      <div class="footer-content">
        <BaseButton
          @click.native="downloadResume"
          msg="Download resume"
        />
        <div>
          <p>nylevealejandrino@gmail.com | Facebook | LinkedIn </p>
        </div>
        <div>
          <p>Back to top</p>
        </div>
      </div>
    </LayoutContainerNoPadding>
  </footer>
</template>

<script>
import LayoutContainerNoPadding from '@/layouts/LayoutContainerNoPadding.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  methods: {
    downloadResume() {
      console.log('downloading resume...');
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
  background: $greyDark;
  color: #fff;
  padding: 20px 0;
  font-size: $s-size;
  text-align: center;
  p {
    margin: 0;
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
