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
@import './../../styles/main.scss';
.heading-primary {
  color: inherit;
  text-transform: uppercase;

  backface-visibility: hidden;
  margin-bottom: 6rem;

  &--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.5rem;

    @include respond(phone) {
      letter-spacing: 1rem;
      font-family: 5rem;
    }

    &.animate {
      animation-name: moveInLeft;
      animation-duration: 1s;
      animation-timing-function: ease-out;
    }
    /*
      animation-delay: 3s;
      animation-iteration-count: 3;
      */
  }

  &--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;

    &.animate {
      animation: moveInRight 1s ease-out;
    }

    @include respond(phone) {
      letter-spacing: 0.5rem;
    }
  }
}
</style>
