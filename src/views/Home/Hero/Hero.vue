<template>
  <div class="hero-section">
    <div class="hero-unit">
      <div class="main-container">
        <div class="logo-section">
          <div class="pen">
            <img alt="" class="mobile" id="logo-05" src="img/logo-05.svg" />
          </div>
          <div class="small-logo">
            <img alt="" id="logo-01" src="img/logo-01.svg" /> 
            <img alt="" class="mobile" id="logo-02" src="img/logo-02.svg" />
          </div>
          <div class="name-description">
            <img alt="" id="logo-03" src="img/logo-03.svg" />
            <img alt="" id="logo-04" src="img/logo-04.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-section {
  background: #323132;
  height: calc(100vh - 65px);
  max-height: 800px;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-ny {
    width: 600px;
    height: 200px;
    background: pink;
  }
}
</style>
