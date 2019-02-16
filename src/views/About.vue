<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BaseButton msg="Go to Website"/>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'about',
  components: {
    BaseButton
  }
}
</script>

