<template>
  <div class="form__group">
    <label v-if="input.label" class="form__label">{{input.label}}</label>
    <div class="form__control">
      <input
        class="form__input"
        :type="input.type"
        :placeholder="input.placeholder"
        :disabled="disabled"
        >
    </div>

  </div>
</template>

<script>
export default {
  props: {
    input: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss">
@import './../../styles/utils/_variables.scss';
.form {
  &__group {
    color: $color-grey-dark-3;
    font-family: Arial, Helvetica, sans-serif;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  &__input {
    font-size: 1.25rem;
    padding: 0.8rem 1rem;
    border-radius: 2px;
    color: inherit;
    font-family: inherit;
    background-color: rgba($color-grey-dark, 0.1);
    border: none;
    border-bottom: 3px solid transparent;
    width: 100%;
    display: block;
    transition: all 0.15s;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
      border-bottom: 2px solid $color-primary;
    }

    &:focus:invalid {
      border-bottom: 2px solid $color-secondary-dark;
    }

    &::-webkit-input-placeholder {
      color: $color-grey-dark-2;
    }
  }

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.1s;
  }
}
</style>
