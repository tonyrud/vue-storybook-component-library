<template>
  <div class="row">
    <div class="col-1-of-2">
      <heading-tertiary>col-1-of-2</heading-tertiary>
      <paragraph>Donec rutrum, neque sed tempor varius, quam leo imperdiet odio, eget auctor turpis lorem egestas velit. Nulla tristique varius sem eget scelerisque. Suspendisse cursus nibh at sapien imperdiet iaculis.</paragraph>
    </div>
    <div class="col-1-of-2">
      <heading-tertiary>col-1-of-2</heading-tertiary>
      <paragraph>Suspendisse id tincidunt dui. Fusce fermentum pretium nisl, et porttitor purus hendrerit eget. Phasellus eget eleifend est. Etiam interdum, elit eget fringilla lacinia, lacus dolor cursus sem, at hendrerit nibh purus ac ante. Praesent eu tempus nisl. Proin nec risus a est posuere imperdiet et a velit.</paragraph>
      
    </div>
  </div>
</template>

<script>
import Paragraph from './../typography/Paragraph.vue'
import HeadingTertiary from './../typography/HeadingTertiary.vue'
export default {
  components: {
    Paragraph,
    HeadingTertiary,
  },
}
</script>

<style lang="scss">
@import './../../styles/main.scss';
</style>
