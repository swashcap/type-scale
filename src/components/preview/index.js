/** @jsx h */
import { h } from 'preact'

import Heading from '../heading'
import style from './style.css'
import scalers from '../../helpers/scalers'

export default ({ groups, onContentChange, settings: { displayUnit, fontFamily, scale }, ...rest }) => {
  const scaler = scalers.get(scale)
  const sizes = [...groups[0].items].reverse().map((children, currentIndex) => ({
    children,
    size: scaler({
      currentIndex,
      scale: groups[0].coefficient,
      seed: groups[0].seed
    })
  })).reverse()

  return (
    <div class={style.preview} {...rest}>
      {sizes.map(({ children, size }, index) => (
        <Heading
          class={style['preview-item']}
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
