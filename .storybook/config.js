import { configure } from '@storybook/vue'

import './../src/styles/vendor/markdown.css'

import Vue from 'vue'

// Import your custom components.
import Mybutton from '../src/stories/Button.vue'
import FormInput from '../src/stories/forms/FormControlInput.vue'
import Heading from '../src/stories/headings/HeadingSecondary.vue'

// Register custom components.
Vue.component('my-button', Mybutton)
Vue.component('my-input', FormInput)

const req = require.context('../src/stories/', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
