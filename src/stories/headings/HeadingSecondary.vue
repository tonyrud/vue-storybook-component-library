<template>
  <div class="u-margin-bottom-xsmall" >
      <h2 class="heading-secondary" :class="{ gradient: gradient, upper: upper }">
        <slot>Please add header content</slot>
      </h2>
  </div>
</template>

<script>
export default {
  props: {
    gradient: {
      type: Boolean,
      default: false,
    },
    upper: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './../../styles/utils/_module.scss';
@import './../../styles/base/_typography.scss';
</style>
