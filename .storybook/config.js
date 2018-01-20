import { configure } from '@storybook/vue'

import Vue from 'vue'
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import Mybutton from '../src/stories/Button.vue'
import FormInput from '../src/stories/forms/FormControlInput.vue'

// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components.
Vue.component('my-button', Mybutton)
Vue.component('my-input', FormInput)

// function loadStories() {
//   // You can require as many stories as you need.
//   require('../src/stories')
// }

// configure(loadStories, module)

const req = require.context('../src/stories/', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
