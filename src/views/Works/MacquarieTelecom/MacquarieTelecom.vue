<template>
  <div>
    <Hero></Hero>
    <Summary></Summary>
    <ResponsiveWebRollouts></ResponsiveWebRollouts>
    <MinorPageDesign></MinorPageDesign>
    <!-- <IconDesign></IconDesign> -->
  </div>
</template>


<script>
import Hero from '@/views/Works/MacquarieTelecom/Hero.vue';
import Summary from '@/views/Works/MacquarieTelecom/Summary.vue';
import ResponsiveWebRollouts from '@/views/Works/MacquarieTelecom/ResponsiveWebRollouts.vue';
import MinorPageDesign from '@/views/Works/MacquarieTelecom/MinorPageDesign.vue';
// import IconDesign from '@/views/Works/MacquarieTelecom/IconDesign.vue';

export default {
  components: {
    Hero,
    Summary,
    ResponsiveWebRollouts,
    MinorPageDesign,
    // IconDesign,
  },
};
</script>
