<template>
  <p class="paragraph">
    <slot></slot>
  </p>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './../../styles/main.scss';

.paragraph {
  font-size: $default-font-size;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
}
</style>
