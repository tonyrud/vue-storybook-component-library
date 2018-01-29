<template>
  <h3 class="heading-tertiary u-margin-bottom-small"><slot></slot></h3>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './../../styles/main.scss';

.heading-tertiary {
  font-size: $default-font-size;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
