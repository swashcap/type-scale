/** @jsx h */
import { h } from 'preact'

import style from './style.css'
import { cn } from '../../helpers/classnames'

export default ({
  children,
  class: className,
  displayUnit = 'px',
  element: Component = 'p',
  fontFamily,
  size,
  ...rest
}) => {
  const fontSize = Math.round(size * 100) / 100
  const emSize = Math.round(size * 100) / 1600

  const displaySize = displayUnit === 'px'
    ? (

      <code class={style['heading-code']}>
        {fontSize % 1 ? fontSize.toFixed(2) : fontSize}<abbr class={style['heading-abbr']} title='pixels'>px</abbr>
      </code>
    ) : (
      <code class={style['heading-code']}>
        {emSize % 1 ? emSize.toFixed(2) : emSize}em
      </code>
    )

  return (
    <div class={cn(style.heading, className)} {...rest}>
      <Component
        class={cn(
          style['heading-component'],
          fontFamily === 'bogle' && style['heading-component--bogle'],
          fontFamily === 'monospace' && style['heading-component--monospace'],
          fontFamily === 'serif' && style['heading-component--serif']
        )}
        style={{ fontSize: `${fontSize}px` }}
      >
        {children}
      </Component>
      {displaySize}
    </div>
  )
}
