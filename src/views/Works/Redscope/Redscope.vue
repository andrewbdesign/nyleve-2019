<template>
  <div>
    <Hero></Hero>
    <Summary></Summary>
    <CreativeDirection></CreativeDirection>
    <WebDesignOptimisation></WebDesignOptimisation>
    <GraphicDesign></GraphicDesign>
    <AnimationVideoEditing></AnimationVideoEditing>
  </div>
</template>

<script>
import Hero from '@/views/Works/Redscope/Hero.vue';
import Summary from '@/views/Works/Redscope/Summary.vue';
import CreativeDirection from '@/views/Works/Redscope/CreativeDirection.vue';
import WebDesignOptimisation from '@/views/Works/Redscope/WebDesignOptimisation.vue';
import GraphicDesign from '@/views/Works/Redscope/GraphicDesign.vue';
import AnimationVideoEditing from '@/views/Works/Redscope/AnimationVideoEditing.vue';

export default {
  components: {
    Hero,
    Summary,
    CreativeDirection,
    WebDesignOptimisation,
    GraphicDesign,
    AnimationVideoEditing,
  },
};
</script>
