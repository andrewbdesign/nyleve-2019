<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    padding: $xl-size 10px;
    max-width: $max-width;
  }
  @media screen and (min-width: $tablet) {
    .container {
      width: 80%;
      padding: $xl-size 0;
    }
  }
  @media screen and (min-width: $desktop) {
    .container {
      width: 100rem;
    }
  }
</style>
