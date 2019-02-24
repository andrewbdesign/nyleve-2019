<template>
  <div>
    <Hero></Hero>
    <Summary></Summary>
    <ResponsiveWebRollouts></ResponsiveWebRollouts>
    <MinorPageDesign></MinorPageDesign>
    <Phototouching></Phototouching>
    <Testing></Testing>
  </div>
</template>

<script>
import Hero from '@/views/Works/KingLiving/Hero.vue';
import Summary from '@/views/Works/KingLiving/Summary.vue';
import ResponsiveWebRollouts from '@/views/Works/KingLiving/ResponsiveWebRollouts.vue';
import MinorPageDesign from '@/views/Works/KingLiving/MinorPageDesign.vue';
import Phototouching from '@/views/Works/KingLiving/Phototouching.vue';
import Testing from '@/views/Works/KingLiving/Testing.vue';

export default {
  components: {
    Hero,
    Summary,
    ResponsiveWebRollouts,
    MinorPageDesign,
    Phototouching,
    Testing,
  },
};
</script>
