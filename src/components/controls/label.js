/** @jsx h */
import { h } from 'preact'

import styles from './label.css'

export default ({ class: className, element: Component = 'label', ...rest }) => (
  <Component class={`${styles.label} ${className}`} {...rest} />
)
