import { storiesOf } from '@storybook/vue'
import Grid1of4 from './Grid1of4.vue'
import Grid1of2 from './Grid1of2.vue'
import Grid1of3 from './Grid1of3.vue'
import Grid2of3 from './Grid2of3.vue'
import GridComponent from './GridComponent.vue'
import Card from './../cards/Card.vue'

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
  .add('Layouts', () => {
    return {
      components: { Grid1of2, Grid1of4, Grid1of3, Grid2of3 },
      template: `
      <div>
        <grid1of4></grid1of4>
        <grid1of3></grid1of3>
        <grid1of2></grid1of2>
        <grid2of3></grid2of3>
      </div>
      `,
    }
  })
  .add('Grid Component', () => {
    return {
      components: { Card, GridComponent },
      template: `
      <GridComponent :gap="{row: 15, column: 150}">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </GridComponent>
      `,
    }
  })
