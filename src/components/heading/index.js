/** @jsx h */
import { Fragment, h } from 'preact'

import ContentEditable from '../content-editable'
import style from './style.css'
import { cn } from '../../helpers/classnames'

export default ({
  children,
  class: className,
  displayUnit = 'px',
  fontFamily,
  onContentChange,
  size,
  ...rest
}) => {
  const fontSize = Math.round(size)
  const emSize = Math.round(fontSize * 100) / 1600
  const displayFontSize = fontSize % 1 ? fontSize.toFixed(1) : fontSize
  const displayEmSize = emSize % 1 ? emSize.toFixed(2) : emSize

  const displaySize = displayUnit === 'px'
    ? (
      <Fragment>
        {displayFontSize}<abbr class={style['heading-abbr']} title='pixels'>px</abbr>
      </Fragment>
    )
    : `${displayEmSize}em`

  return (
    <div
      class={cn(style.heading, className)}
      {...rest}
    >
      <div
        aria-label={`${children}, ${displayUnit === 'px' ? `${displayFontSize} pixels` : `${displayEmSize} ems`}`}
        class={cn(
          style['heading-component'],
          fontFamily === 'bogle' && style['heading-component--bogle'],
          fontFamily === 'monospace' && style['heading-component--monospace'],
          fontFamily === 'serif' && style['heading-component--serif']
        )}
        style={{ fontSize: `${fontSize}px` }}
      >
        <ContentEditable
          autoComplete='off'
          onChange={onContentChange}
          spellcheck={false}
        >
          {children}
        </ContentEditable>
      </div>
      <code aria-label='hidden' class={style['heading-code']}>
        {displaySize}
      </code>
    </div>
  )
}
