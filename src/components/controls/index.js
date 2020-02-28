/** @jsx h */
import { h } from 'preact'

import ItemPicker from './item-picker'
import NumericPicker from './numeric-picker'
import TextPicker from './text-picker'
import style from './style.css'

export default ({ items, onDisplayUnitChange, onScaleChange, onSeedChange, onTypeChange, settings, ...rest }) => (
  <form class={style.controls} {...rest}>
    {items.map(({ scale, seed, type }, index) => (

      <fieldset class={style['controls-fieldset']} key={index}>
        <TextPicker
          class={style['controls-item']}
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
          class={style['controls-item']}
          id={`controls-scale-${index}`}
          label='Scale'
          onChange={(event) => onScaleChange(index, event)}
          step={0.1}
          value={scale}
        />
        <NumericPicker
          class={style['controls-item']}
          id={`controls-seed-${index}`}
          label='Base size'
          onChange={(event) => onSeedChange(index, event)}
          value={seed}
        />
      </fieldset>
    ))}

    <ItemPicker
      label='Display units'
      items={{
        em: 'em units',
        px: 'pixels'
      }}
      name='display-unit'
      onChange={onDisplayUnitChange}
      value={settings.displayUnit}
    />

  </form>
)
