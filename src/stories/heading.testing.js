// import Vue from 'vue'

// import './../styles/main.scss'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withNotes } from '@storybook/addon-notes'
import Centered from '@storybook/addon-centered'
import MyInput from './forms/FormControlInput.vue'
import formInputMD from './forms/Forms.md'
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

import HeadingSecondary from './headings/HeadingSecondary.vue'
import HeadingPrimary from './headings/HeadingPrimary.vue'

storiesOf('Headings', module)
  .addDecorator(withKnobs)
  .add('Product Suggestion', () => {
    const name = text('Heading Text', 'Primary Heading')
    return {
      components: { HeadingPrimary },
      template: `<heading-primary>${name}</heading-primary>`,
    }
  })
  .add('Secondary', () => {
    const name = text('Heading Text', 'Secondary Heading')
    const gradient = boolean('Gradient', true)
    const upper = boolean('Uppercase', true)
    return {
      components: { HeadingSecondary },
      template: `
      <div>
        <heading-secondary
          :upper=${upper}
          :gradient=${gradient}>${name}</heading-secondary>
        <div class="markdown-body">
          ${formInputMD}
        </div>
      </div>
      `,
    }
  })
