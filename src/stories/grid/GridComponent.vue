<template>
  <div class="grid-container" :style="{'grid-gap': `${gap.row/10}rem ${gap.column/10}rem`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  created() {
    console.log('created props', this.gap)
  },
  props: {
    gap: {
      type: Object,
      required: false,
    },
  },
}
</script>

<style lang="scss">
@import './../../styles/main.scss';

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 4rem;
  align-items: start;
}
</style>