<template>
  <div class="grid-container" :style="{'grid-gap': `${gap.row/10}rem ${gap.column/10}rem`, 'grid-template-columns': `repeat(auto-fit, minmax(${min/10}rem, 1fr))`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gap: {
      type: Object,
      required: false,
    },
    min: {
      type: Number,
      required: false,
    },
  },
}
</script>

<style lang="scss">
@import './../../styles/main.scss';

.grid-container {
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  // grid-gap: 4rem;
  align-items: start;
}
</style>