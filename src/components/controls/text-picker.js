/** @jsx h */
import { h } from 'preact'

import Label from './label'
import styles from './text-picker.css'
import { cn } from '../../helpers/classnames'

export default ({ class: className, label, id, onChange, options, value, ...rest }) => (
  <div class={cn(styles['text-picker'], className)} {...rest}>
    <Label for={id}>{label}</Label>
    <select
      class={styles['text-picker-select']}
      id={id}
      onChange={onChange}
      value={value}
    >
      {Object.keys(options).map((value) => (
        <option key={value} value={value}>{options[value]}</option>
      ))}
    </select>
  </div>
)
