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
</style>
