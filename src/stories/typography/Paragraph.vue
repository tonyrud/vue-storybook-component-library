<template>
  <p class="paragraph">
      ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ipsa, debitis impedit quam iure magnam voluptates unde quia
      ullam quae id! Perferendis sunt cum veritatis molestias adipisci nulla consequuntur neque?
  </p>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './../../styles/utils/_module.scss';
@import './../../styles/main.scss';

.paragraph {
  font-size: $default-font-size;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
}
</style>
