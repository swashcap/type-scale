/** @jsx h */
import { h } from 'preact'

import Heading from '../heading'
import style from './style.css'

export default ({ sizes, ...rest }) => (
  <div class={style.preview} {...rest}>
    {sizes.slice().reverse().map((size, index) => (
      <Heading class={style['preview-item']} size={size}>
        Heading {index + 1}
      </Heading>
    ))}
  </div>
)
