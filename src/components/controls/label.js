/** @jsx h */
import { h } from 'preact'

import styles from './label.css'

export default ({ class: className, ...rest }) => (
  <label class={`${styles.label} ${className}`} {...rest} />
)
