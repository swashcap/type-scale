/** @jsx h */
import { h } from 'preact'

import ItemPicker from './item-picker'
import NumericPicker from './numeric-picker'
import TextPicker from './text-picker'
import style from './style.css'

export default ({ groups, onCoefficientChange, onCountChange, onDisplayUnitChange, onFontFamilyChange, onScaleChange, onSeedChange, settings, ...rest }) => (
  <form class={style.controls} {...rest}>
    <fieldset class={style['controls-fieldset']}>
      <TextPicker
        class={style['controls-item']}
        id='controls-font-family'
        label='Font Family'
        onChange={onFontFamilyChange}
        options={{
          'sans-serif': 'Sans Serif',
          monospace: 'Monospace',
          serif: 'Serif',
          bogle: 'BogleWeb'
        }}
        value={settings.fontFamily}
      />
      <TextPicker
        class={style['controls-item']}
        id='controls-scale'
        label='Scale'
        onChange={onScaleChange}
        options={{
          classic: 'Classic',
          linear: 'Linear',
          'golden-ratio': 'Golden Ratio'
        }}
        value={settings.scale}
      />
    </fieldset>

    {groups.map(({ coefficient, items, seed }, index) => (
      <fieldset class={style['controls-fieldset']} key={index}>
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
        <NumericPicker
          class={style['controls-item']}
          id={`controls-count-${index}`}
          label='Count'
          onChange={(event) => onCountChange(index, event)}
          value={items.length}
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
