<template>
  <div class="half">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.half {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 3rem 0 0;
  position: relative;
  z-index: 300;
  div {
    width: 100%;
  }
}

@media screen and (min-width: 980px){
  .half {
    flex-direction: row;
    align-items: center;
  }
}
</style>
