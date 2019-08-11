/** @jsx h */
import { h } from 'preact'

import Label from './label'
import style from './item-picker.css'

export default ({ items, label, name, value, ...rest }) => (
  <fieldset class={style['item-picker']} {...rest}>
    <Label class={style['item-picker-legend']} element='legend'>{label}</Label>
    {Object.keys(items).map((key) => (
      <label class={style['item-picker-label']}>
        <input
          class={style['item-picker-input']}
          checked={key === value}
          name={name}
          type='radio'
          value={key}
        />
        <span class={style['item-picker-text']} >{items[key]}</span>
      </label>
    ))}
  </fieldset>
)
