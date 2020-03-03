/** @jsx h */
import { h } from 'preact'

import Heading from '../heading'
import style from './style.css'
import scalers from '../../helpers/scalers'

export default ({
  groups,
  onContentChange,
  settings: { displayUnit, fontFamily, scale },
  ...rest
}) => {
  const scaler = scalers.get(scale)
  const sizes = groups
    .reduce((memo, { coefficient, items, seed }, groupIndex) => (
      memo.concat(items.map((children, currentIndex) => ({
        children,
        groupIndex,
        size: scaler({
          currentIndex,
          scale: coefficient,
          seed
        })
      })))
    ), [])
    .sort(({ size: a }, { size: b }) => {
      if (a > b) return -1
      else if (b < a) return 1
      return 0
    })

  return (
    <div {...rest}>
      {sizes.map(({ children, groupIndex, size }, index) => (
        <Heading
          class={`${groupIndex > 0 ? style['preview-item--1'] : ''}`}
          displayUnit={displayUnit}
          fontFamily={fontFamily}
          key={size}
          onContentChange={value => onContentChange(0, index, value)}
          size={size}
        >
          {children}
        </Heading>
      ))}
    </div>
  )
}
