<template>
  <div class="half">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.half {
  display: flex;
  justify-content: space-evenly;
  // flex-direction: column;
  div {
    width: 100%;
  }
}
</style>
