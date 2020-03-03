/** @jsx h */
import { h } from 'preact'

import style from './button.css'

export default ({
  children,
  className,
  variant,
  ...rest
}) => (
  <button
    class={`${style.button}${variant === 'secondary' ? ` ${style['button--secondary']}` : ''}${className ? ` ${className}` : ''}`}
    {...rest}
  >
    <span>{children}</span>
  </button>
)
