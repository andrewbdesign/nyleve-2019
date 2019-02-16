<template>
  <footer class="footer">
    <p> Nyleve Alejandrino | {{ date }} </p>
  </footer>
</template>

<script>
export default {
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
}
</style>
