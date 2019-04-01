<template>
  <div class="hero-section">
    <div class="hero-unit">
      <div class="main-container">
        <div class="logo-section">
          <div class="pen">
            <img alt="" class="mobile" id="logo-05" src="@/assets/hero/logo-05.svg" />
          </div>
          <div class="small-logo">
            <img alt="" id="logo-01" src="@/assets/hero/logo-01.svg" />
            <img alt="" class="mobile" id="logo-02" src="@/assets/hero/logo-02.svg" />
          </div>
          <div class="name-description">
            <img alt="" id="logo-03" src="@/assets/hero/logo-03.svg" />
            <img alt="" id="logo-04" src="@/assets/hero/logo-04.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap';

export default {
  mounted() {
    const elements = [
      '#logo-01',
      '#logo-02',
      '#logo-03',
      '#logo-04',
      '#logo-05',
    ];
    TweenMax.set(elements, { autoAlpha: 0 });
    TweenMax.set(elements[4], { x: -100 });

    const tl = new TimelineMax();
    tl.to(elements[0], 0.8, { autoAlpha: 1, ease: 'Sine.easeOut' }, '1')
      .to(elements[1], 0.3, { autoAlpha: 1, ease: 'Sine.easeOut' }, '1.4')
      .to(elements[2], 0.7, { autoAlpha: 1, ease: 'Sine.easeOut' }, '1.8')
      .to(elements[3], 0.7, { autoAlpha: 1, ease: 'Sine.easeOut' }, '2')
      .to(elements[4], 1, { autoAlpha: 1, x: 0, ease: 'Power3.easeOut' }, '2.6');
  },
};
</script>


<style lang="scss" scoped>
.hero-section {
  background: #323132;
  height: 99vh;
  // max-height: 800px;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-unit {
    display: flex;
    align-items: center;
    max-height: 800px;
    min-height: 600px;
    width: 70%;
  }
  .main-container {
    margin: -5% auto 0;
    width: 100%;
    text-align: center;
  }
  .pen {
    position: absolute;
    right: 0;
    display: none;
  }
  .small-logo {
    position: relative;
    z-index: 300;
    #logo-02 {
      display: none;
    }
  }
  .name-description {
    position: relative;
    z-index: 300;
    #logo-03 {
      width: 100%;
    }
  }
  #logo-01,
  #logo-02,
  #logo-03,
  #logo-04,
  #logo-05 {
    display: block;
    margin: 0 auto;
  }
}

@media screen and (min-width: 900px) {
  .main-container {
    transform: scale(1.3);
  }
  .hero-section {
    .pen {
      display: block;
      top: -70px;
      // right: 40px;
      left: 300px;
    }
    .main-container {
      width: 80%;
    }
    .small-logo {
      display: inline-flex;
      width: 100px;
      margin: 0;
      #logo-01 {
        margin: 0;
      }
      #logo-02 {
        margin: 0;
        display: block;
      }
    }
    .name-description {
      // position: relative;
      // top: -30px;
      display: inline-block;
      #logo-03 {
        position: relative;
        top: 10px;
      }
      #logo-04 {
        margin: 0;
      }
    }
  }
}
</style>
