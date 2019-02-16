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
        summary: 'As the web protal and App must have a unison sense of flow it was essential from the very earl stages to have this in mind. My role during the wire framing stage was to wok on and expand the ideas of the Creative Director to make sure his design thinking and solution is reflected on every necessary page/section of the Web Portal/App.',
        listTitle: 'Key considerations & responsibilitiessss',
        items: [
          'Maintenance of core functionality and design language when expanding into creation of other pages',
          'Applying an intuitive feeling when designing navigation to and from other pages',
          'Thinking modular in terms of sections that would need little to no arragement when applied to different pages',
          'Arrangement with a sense of responsive design in mind to allow functionality across all devices',
          'Functionality interchangeable to both the web portal and mobile app to ensure all changes would be reflected from on platform to the other',
          'Apply intuitive sense arrangement and information architecture as to not cause information overload',
        ],
        image: Laptop,
        desktop: 'https://www.fillmurray.com/202/202',
        tablet: 'https://www.fillmurray.com/204/204',
        mobile: 'https://www.fillmurray.com/206/206',
      },
      appflow: {
        title: 'App Flow Design',
        summary: 'My role during this stage was creating the App flow for one of the most important components of the app which is adding a bill into the system that would allow choice for',
        listTitle: 'Key considerations & responsibilities',
        items: [
          'The design would be compatible across all devices and interchangeable between the web portal and mobile app',
          'Applying an intuitive story like flow that does not require too much cognitive load on the end user',
          'Ensuring the flow does not hit a dead end, but instead forms a cycle that would repeated allow the end user to keep adding their bills',
        ],
        image: Mobile,
        desktop: 'https://www.fillmurray.com/202/202',
        tablet: 'https://www.fillmurray.com/204/204',
        mobile: 'https://www.fillmurray.com/206/206',
      },
      webdesign: {
        title: 'Web Design',
        summary: 'After initial Wireframing and App Flow were approved, it was time to move on to the design stage.',
        listTitle: 'Key considerations & responsibilitie',
        items: [
          'Ensure quick scan-ability in maintain across all devices and platforms',
          'Carry out key design language/Branding set out by creative director and apply it across all pages',
          'Roll out responsive designs across all sizes to be deliverable to developers',
          'Design new pages that were not taken into consideration in the early stages of',
        ],
        image: LaptopTabletMobile,
        desktop: 'https://www.fillmurray.com/202/202',
        tablet: 'https://www.fillmurray.com/204/204',
        mobile: 'https://www.fillmurray.com/206/206',
      },
      appdesign: {
        title: 'UI/UX App Design',
        summary: 'While the Webportal had taken first and foremost priority, when developing the Mobile App, the team decided to take most of the core functionality and design of the webportal to allow us to proceed into the design stage much faster',
        listTitle: 'Key considerations & responsibilities',
        items: [
          'make sure the core functionality mirrors the web portal, while creating a different feel design wise',
          'To create this different design feel to create a clear separation of the web portal and mobile app, different design colour schemes were used',
          'creation of newer graphics to create a more clear distinction between web portal and phone app',
          'Applying design to functionality that works on both android and iOS',
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
