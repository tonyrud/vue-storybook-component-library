import { storiesOf } from '@storybook/vue'
import Grid1of4 from './Grid1-4.vue'

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
  width: '100%',
  padding: '3em',
}

storiesOf('Responsive Grid', module)
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
  .add('1 of 4', () => {
    return {
      components: { Grid1of4 },
      template: `
      <grid1of5><grid1of4>
      `,
    }
  })
