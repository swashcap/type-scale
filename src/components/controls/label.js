/** @jsx h */
import { h } from 'preact'

import styles from './label.css'
import { cn } from '../../helpers/classnames'

export default ({ class: className, element: Component = 'label', ...rest }) => (
  <Component class={cn(styles.label, className)} {...rest} />
)
