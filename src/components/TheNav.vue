<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/easy-bill-pay">Easy Bill Pay</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  background: $greyDark;
  color: #fff;
  padding: 20px;
  a {
    color: #fff;
    font-size: $m-size;
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
  }
}
</style>
