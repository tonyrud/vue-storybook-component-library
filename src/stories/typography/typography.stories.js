import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
const inputWrapperStyles = {
  width: '400px',
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
  .add('Primary Heading', () => {
    return {
      template: `
      <div>
        <div class="header__text-box">
        <h1 class="heading-primary">
            <span class="heading-primary--main">Outdoors</span>
            <span class="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#" class="btn btn--white btn--animated">Discover our Tours</a>
    </div>
      </div>
      `,
    }
  })
