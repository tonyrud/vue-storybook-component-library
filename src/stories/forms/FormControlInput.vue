<template>
  <div class="form__group">
    <label v-if="input.label" class="form__label">{{input.label}}</label>
      <input
        class="form__input"
        :class="{disabled}"
        :type="input.type"
        :placeholder="placeholder"
        :disabled="disabled"
        >
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
  computed: {
    placeholder() {
      if (!this.input.label) {
        return this.input.placeholder
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
@import './../../styles/utils/_module.scss';
.form {
  &__group {
    color: $color-grey-dark-3;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
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
    border-bottom: 1px solid transparent;
    width: 100%;
    display: block;
    transition: all 0.15s;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
      border-bottom: 2px solid $color-primary;
    }

    &:focus:invalid {
      border-bottom: 2px solid $color-error;
    }
    &:invalid {
      border-bottom: 2px solid $color-error-light;
    }

    &::-webkit-input-placeholder {
      color: $color-grey-dark-2;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  &__label {
    color: inherit;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 0.3rem 0.2rem;
    display: block;
    transition: all 0.1s;
  }
}
</style>
