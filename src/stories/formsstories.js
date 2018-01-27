import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withNotes } from '@storybook/addon-notes'
import Centered from '@storybook/addon-centered'
import MyInput from './forms/FormControlInput.vue'
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

import FormControlRadio from './forms/FormControlRadio.vue'

const inputWrapperStyles = {
  width: '400px',
  padding: '1em',
}

storiesOf('Form Elements', module)
  .addDecorator(withKnobs)
  .addDecorator(() => ({
    // Decorated with `story` component
    template: `<div :style="styles"><story/></div>`,
    data() {
      return {
        styles: inputWrapperStyles,
      }
    },
  }))
  .add(
    'Input',
    withNotes('Some notes on this Input')(() => {
      const label = text('Label', '')
      const disabled = boolean('Disabled', false)
      return {
        template: `
      <div>
        <my-input :disabled=${disabled} :input="{placeholder: 'Email', type: 'email', label: '${label}'}"></my-input>
      </div>
      `,
      }
    }),
  )
  .add('Radio', () => {
    const items = array('Items', ['Guitars', 'Mics', 'Drums'])
    return {
      components: { FormControlRadio },
      template: `
    <div>
      <FormControlRadio :items="items"/>
    </div>
    `,
      data() {
        return {
          items: (() => {
            return items.map(item => ({ label: item }))
          })(),
        }
      },
    }
  })
