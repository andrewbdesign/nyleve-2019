<template>
  <div>

    <LayoutHero
      :title="hero.title"
      :summary="hero.summary"
      :cta="hero.cta"
    ></LayoutHero>

    <LayoutSummary
      :title="summary.title"
      :summary="summary.summary"
    ></LayoutSummary>

    <LayoutImageLeft
      :title="wireframing.title"
      :summary="wireframing.summary"
      :listTitle="wireframing.listTitle"
      :items="wireframing.items"
      :image="wireframing.image"
      :desktop="wireframing.desktop"
      :tablet="wireframing.tablet"
      :mobile="wireframing.mobile"
    ></LayoutImageLeft>

    <LayoutImageRight
      :title="appflow.title"
      :summary="appflow.summary"
      :listTitle="appflow.listTitle"
      :items="appflow.items"
      :image="appflow.image"
      :desktop="appflow.desktop"
      :tablet="appflow.tablet"
      :mobile="appflow.mobile"
    ></LayoutImageRight>

    <LayoutImageFull
      :title="webdesign.title"
      :summary="webdesign.summary"
      :listTitle="webdesign.listTitle"
      :items="webdesign.items"
      :image="webdesign.image"
      :desktop="webdesign.desktop"
      :tablet="webdesign.tablet"
      :mobile="webdesign.mobile"
    ></LayoutImageFull>

    <LayoutImageRight
      :title="appdesign.title"
      :summary="appdesign.summary"
      :listTitle="appdesign.listTitle"
      :items="appdesign.items"
      :image="appdesign.image"
      :desktop="appdesign.desktop"
      :tablet="appdesign.tablet"
      :mobile="appdesign.mobile"
    ></LayoutImageRight>

  </div>
</template>

<script>
import LayoutHero from '@/layouts/LayoutHero.vue';
import LayoutSummary from '@/layouts/LayoutSummary.vue';
import LayoutImageLeft from '@/layouts/LayoutImageLeft.vue';
import LayoutImageRight from '@/layouts/LayoutImageRight.vue';
import LayoutImageFull from '@/layouts/LayoutImageFull.vue';
// Images
import Laptop from '@/assets/easy-bill-pay/laptop.png';
import Mobile from '@/assets/easy-bill-pay/mobile.png';
import LaptopTabletMobile from '@/assets/easy-bill-pay/laptop-tablet-mobile.png';

export default {
  components: {
    LayoutHero,
    LayoutSummary,
    LayoutImageLeft,
    LayoutImageRight,
    LayoutImageFull,
  },
  data() {
    return {
      hero: {
        title: 'Easy Bill Pay',
        summary: 'A beloved Australian furniture retail chain that focuses on sleek designer chairs. My main role for this brand was to carry out responsive roll outs of the desktop designs of the intricate and relatively large eCommerce website store.',
        cta: 'Go to website',
      },
      summary: {
        title: 'Main roles & Responsibilities',
        summary: 'UI/UX Design, Wireframing, App Design, App rollout, Web Design, Responsive Webrollouts, Marketing Design, Marketing Animation',
      },
      wireframing: {
        title: 'Wireframeing & UI/UX (Web Portal & App)',
        summary: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        listTitle: 'Key considerations & responsibilitiessss',
        items: [
          'This is a list 1',
          'This is a list 2',
          'This is a list 3',
          'This is a list 41',
        ],
        image: Laptop,
        desktop: 'https://www.fillmurray.com/202/202',
        tablet: 'https://www.fillmurray.com/204/204',
        mobile: 'https://www.fillmurray.com/206/206',
      },
      appflow: {
        title: 'App Flow Design',
        summary: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        listTitle: 'Key considerations & responsibilitiessss',
        items: [
          'This is a list 1',
          'This is a list 2',
          'This is a list 3',
          'This is a list 41',
        ],
        image: Mobile,
        desktop: 'https://www.fillmurray.com/202/202',
        tablet: 'https://www.fillmurray.com/204/204',
        mobile: 'https://www.fillmurray.com/206/206',
      },
      webdesign: {
        title: 'Web Design',
        summary: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        listTitle: 'Key considerations & responsibilitiessss',
        items: [
          'This is a list 1',
          'This is a list 2',
          'This is a list 3',
          'This is a list 41',
        ],
        image: LaptopTabletMobile,
        desktop: 'https://www.fillmurray.com/202/202',
        tablet: 'https://www.fillmurray.com/204/204',
        mobile: 'https://www.fillmurray.com/206/206',
      },
      appdesign: {
        title: 'Web Design',
        summary: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        listTitle: 'Key considerations & responsibilitiessss',
        items: [
          'This is a list 1',
          'This is a list 2',
          'This is a list 3',
          'This is a list 41',
        ],
        image: Mobile,
        desktop: 'https://www.fillmurray.com/202/202',
        tablet: 'https://www.fillmurray.com/204/204',
        mobile: 'https://www.fillmurray.com/206/206',
      },
    };
  },
};
</script>
