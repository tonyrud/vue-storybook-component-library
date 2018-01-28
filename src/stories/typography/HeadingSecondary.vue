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
@import './../../styles/main.scss';
.heading-secondary {
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  color: $color-text-dark;
  display: inline-block;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  @include respond(tab-port) {
    font-size: 3rem;
  }
  @include respond(phone) {
    font-size: 2.5rem;
  }

  &.gradient {
    background-image: linear-gradient(
      to right,
      $color-primary-light,
      $color-primary-dark
    );
    color: transparent;
    -webkit-background-clip: text;
  }
  &.upper {
    text-transform: uppercase;
  }
}
</style>
