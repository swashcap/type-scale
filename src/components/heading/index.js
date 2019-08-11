/** @jsx h */
import { h } from 'preact'

import style from './style.css'

export default ({ class: className, element: Component = 'p', ...rest }) => (
  <Component class={`${style.heading} ${className}`} {...rest} />
)
