/** @jsx h */
import { h } from 'preact'

import ItemPicker from './item-picker'
import NumericPicker from './numeric-picker'
import TextPicker from './text-picker'
import style from './style.css'

export default ({ items, onCoefficientChange, onDisplayUnitChange, onFontFamilyChange, onScaleChange, onSeedChange, settings, ...rest }) => (
  <form class={style.controls} {...rest}>
    {items.map(({ coefficient, fontFamily, scale, seed }, index) => (

      <fieldset class={style['controls-fieldset']} key={index}>
        <TextPicker
          class={style['controls-item']}
          label='Font Family'
          onChange={(event) => onFontFamilyChange(index, event)}
          options={{
            'sans-serif': 'Sans Serif',
            monospace: 'Monospace',
            serif: 'Serif'
          }}
          value={fontFamily}
        />
        <TextPicker
          class={style['controls-item']}
          id={`controls-scale-${index}`}
          label='Scale'
          onChange={(event) => onScaleChange(index, event)}
          options={{
            classic: 'Classic',
            linear: 'Linear',
            'golden-ratio': 'Golden Ratio'
          }}
          value={scale}
        />
        <NumericPicker
          class={style['controls-item']}
          id={`controls-coefficient-${index}`}
          label='Coefficient'
          onChange={(event) => onCoefficientChange(index, event)}
          step={0.1}
          value={coefficient}
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
