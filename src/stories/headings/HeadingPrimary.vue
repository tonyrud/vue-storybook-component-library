<template>
  <div class="u-margin-bottom-xsmall product-suggest" >
      <div class="product-suggest__divider"></div>
      <h2 class="product-suggest__text"><slot>Please add content</slot></h2>
  </div>
</template>

<script>
export default {
  props: {
    gradient: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
@import './../../styles/utils/_module.scss';
@import './../../styles/base/_typography.scss';

.product-suggest {
  margin-top: 2rem;
  min-height: 300px;
  padding: 20px 5px 5px;
  position: relative;
  text-align: center;
  &__divider {
    border-top: 1px solid #444;
    height: 5px;
  }

  &__text {
    background: #fff;
    color: inherit;
    display: inline-block;
    font-size: 3em !important;
    font-weight: 700;
    margin: 0 auto;
    margin-top: -45px !important;
    padding: 0 20px;
    position: relative;
    text-transform: uppercase;
    z-index: 5;
  }
}
</style>
