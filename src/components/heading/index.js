/** @jsx h */
import { h } from 'preact'

import style from './style.css'

export default ({ children, class: className, element: Component = 'p', size, ...rest }) => {
  const fontSize = Math.round(size * 100) / 100
  const emSize = Math.round(size * 100) / 1600

  return (
    <div class={`${style.heading} ${className}`} {...rest}>
      <Component class={style['heading-component']} style={{ fontSize: `${fontSize}px` }}>
        {children}
      </Component>
      <div>
        <code class={style['heading-code']}>
          {fontSize % 1 ? fontSize.toFixed(2) : fontSize}px
          {' / '}
          {emSize % 1 ? emSize.toFixed(2) : emSize}em
        </code>
      </div>
    </div>
  )
}
