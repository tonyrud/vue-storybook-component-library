<template>
  <div class="row">
    <div class="col-2-of-3">
      <heading-tertiary>col-2-of-3</heading-tertiary>
      <paragraph>Suspendisse id tincidunt dui. Fusce fermentum pretium nisl, et porttitor purus hendrerit eget. Phasellus eget eleifend est. Etiam interdum, elit eget fringilla lacinia, lacus dolor cursus sem, at hendrerit nibh purus ac ante. Praesent eu tempus nisl. Proin nec risus a est posuere imperdiet et a velit.</paragraph>
      
    </div>
  </div>
</template>

<script>
import Paragraph from './../typography/Paragraph.vue'
import HeadingTertiary from './../typography/HeadingTertiary.vue'
export default {
  components: {
    HeadingTertiary,
    Paragraph,
  },
}
</script>

<style lang="scss">
@import './../../styles/main.scss';
</style>
