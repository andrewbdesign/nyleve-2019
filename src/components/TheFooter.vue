<template>
  <footer class="footer">
    <LayoutContainerNoPadding>
      <p> Nyleve Alejandrino | {{ date }} </p>
    </LayoutContainerNoPadding>
  </footer>
</template>

<script>
import LayoutContainerNoPadding from '@/layouts/LayoutContainerNoPadding.vue';

export default {
  components: {
    LayoutContainerNoPadding,
  },
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss">
.footer {
  background: $greyMedium;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  font-size: $s-size;
  p {
    margin: 0;
  }
}
</style>
