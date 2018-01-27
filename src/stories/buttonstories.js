import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
// import Centered from '@storybook/addon-centered'

import MyButton from './Button.vue'

storiesOf('Button', module)
  // Works if Vue.component is called in the config.js in .storybook
  .add('Rounded', () => ({
    template:
      '<my-button :rounded="true">A Button with rounded edges</my-button>',
  }))
  .add('Square', () => ({
    template:
      '<my-button :rounded="false">A Button with square edges</my-button>',
  }))
