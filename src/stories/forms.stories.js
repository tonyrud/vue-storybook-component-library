import Vue from 'vue'

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

const inputData = {
  type: 'email',
  placeholder: 'Email',
  label: 'Email Label',
}

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add(
    'Inputs',
    withNotes(formInputMD)(() => ({
      // components: { MyInput },

      template: `
    <div>
      <my-input :input={}></my-input>
    </div>
    `,
    })),
  )
  .add('Disabled', () => ({
    template: `<my-input :disabled=true :input={}></my-input>`,
  }))
