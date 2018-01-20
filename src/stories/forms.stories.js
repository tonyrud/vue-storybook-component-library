import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
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

const inputData = {
  type: 'email',
  placeholder: 'Email',
  label: 'Email Label',
}

storiesOf('Inputs', module)
  .addDecorator(Centered)
  // .addDecorator(story => <div style="text-align:center">{story()}</div>)
  // Works if Vue.component is called in the config.js in .storybook
  .add('Default', () => ({
    // components: { MyInput },
    template: `<my-input :input={}></my-input>`,
  }))
  .add('Disabled', () => ({
    template: `<my-input :disabled=true :input={}></my-input>`,
  }))

storiesOf('Addon Knobs', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    const name = text('Name', 'John Doe')
    const age = number('Age', 44)
    const content = `I am ${name} and I'm ${age} years old.`

    return {
      template: `<div>${content}</div>`,
    }
  })
