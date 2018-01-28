import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import HeadingPrimary from './HeadingPrimary.vue'
import HeadingSecondary from './HeadingSecondary.vue'

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
  button,
} from '@storybook/addon-knobs/vue'

const inputWrapperStyles = {
  width: '500px',
  padding: '1em',
}

storiesOf('Typography Elements', module)
  .addDecorator(() => ({
    // Decorated with `story` component
    template: `<div :style="styles"><story/></div>`,
    data() {
      return {
        styles: inputWrapperStyles,
      }
    },
  }))
  .addDecorator(withKnobs)
  .add('Heading Primary', () => {
    const name = text('Heading Text', 'Primary Heading')
    return {
      components: { HeadingPrimary },
      template: `<heading-primary>${name}</heading-primary>`,
    }
  })
