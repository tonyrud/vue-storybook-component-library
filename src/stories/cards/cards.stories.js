import { storiesOf } from '@storybook/vue'
import Card from './Card.vue'

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
  padding: '3em',
}

storiesOf('Cards', module)
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
  .add('Basic Card', () => {
    const cardTitle = text('Card Title', 'The Sea Explorer')
    const hover = boolean('Rotatable Card', false)
    return {
      components: { Card },
      template: `
      <card :hover="${hover}" heading="${cardTitle}" />
      `,
    }
  })
