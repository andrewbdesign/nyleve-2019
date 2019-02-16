<template>
  <button class="button button-cta"> {{ msg }} </button>
</template>

<style lang="scss" scoped>
  .button {
    background: $brandColour;
    color: #fff;
    border-radius: 25px;
    padding: 12px 40px;
    border: none;
    font-size: 1.3rem;
    margin: $m-size 0;
    cursor: pointer;
    &:hover {
      background: darken($brandColour, 9%);
    }
  }
</style>


<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>
