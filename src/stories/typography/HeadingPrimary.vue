<template>
  <div class="header__text-box">
    <h1 class="heading-primary">
        <span class="heading-primary--main"><slot>Please add header content</slot></span>
        <span class="heading-primary--sub">is where life happens</span>
    </h1>
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
</style>
