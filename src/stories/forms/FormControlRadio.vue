<template>
  <div class="form__group">
    <div v-for="(item, i) in items" :key="item.label" class="form__radio-group">
      <input :checked="i === clickedItem" type="radio" name="size" class="form__radio-input" id="small">
      <label @click="clicked(i)" for="small" class="form__radio-label">{{item.label}}
          <span class="form__radio-button"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      clickedItem: undefined,
    }
  },
  methods: {
    clicked(index) {
      this.clickedItem = index
    },
  },
}
</script>

<style lang="scss">
@import './../../styles/utils/_module.scss';
.form {
  &__group {
    color: $color-grey-dark-3;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  &__radio-group {
    width: 49%;
    display: inline-block;
    margin-bottom: 0.6rem;

    @include respond(tab-port) {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  &__radio-input {
    display: none;
  }

  &__radio-label {
    font-size: 1.3rem;
    cursor: pointer;
    position: relative;
    padding-left: 1.5rem;
  }

  &__radio-button {
    height: 1rem;
    width: 1rem;
    border: 2px solid $color-primary;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0;
    // &.clicked &::after {
    //   opacity: 1;
    // }

    &::after {
      content: '';
      display: block;
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: $color-primary;
      opacity: 0;
      transition: all 0.1s;
      will-change: opacity;
    }
  }

  &__radio-input:checked ~ &__radio-label &__radio-button::after {
    opacity: 1;
  }
}
</style>
