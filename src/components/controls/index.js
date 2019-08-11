/** @jsx h */
import { h } from 'preact'

import NumericPicker from './numeric-picker'
import TextPicker from './text-picker'
import style from './style.css'

export default ({ items, onScaleChange, onTypeChange, ...rest }) => (
  <form class={style.controls} {...rest}>
    {items.map(({ scale, type }, index) => (

      <fieldset class={style['controls-item']}>
        <TextPicker
          id={`controls-type-${index}`}
          label='Type'
          onChange={(event) => onTypeChange(index, event)}
          options={{
            classic: 'Classic',
            linear: 'Linear',
            'golden-ratio': 'Golden Ratio'
          }}
          value={type}
        />
        <NumericPicker
          id={`controls-scale-${index}`}
          label='Scale'
          onChange={(event) => onScaleChange(index, event)}
          value={scale}
        />
      </fieldset>
    ))}

  </form>
)
