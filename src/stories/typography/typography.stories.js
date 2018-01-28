import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import HeadingPrimary from './HeadingPrimary.vue'
import HeadingSecondary from './HeadingSecondary.vue'
import HeadingTertiary from './HeadingTertiary.vue'
import Paragraph from './Paragraph.vue'

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
  .add('Heading Secondary', () => {
    const name = text('Heading Text', 'Secondary Heading')
    return {
      components: { HeadingSecondary },
      template: `<heading-secondary>${name}</heading-secondary>`,
    }
  })
  .add('Heading Tertiary/Paragraph', () => {
    const name = text('Heading Text', 'Tertiary Heading')
    return {
      components: { HeadingTertiary, Paragraph },
      template: `
      <div>
      <heading-tertiary>${name}</heading-tertiary>
      <paragraph></paragraph>
      </div>
      `,
    }
  })
  .add('Paragraph', () => {
    // const name = text('Heading Text', 'Tertiary Heading')
    return {
      components: { Paragraph },
      template: `<paragraph></paragraph>`,
    }
  })
