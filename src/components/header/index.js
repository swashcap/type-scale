/** @jsx h */
import { h } from 'preact'

import style from './style.css'

export default ({ class: className, ...rest }) => (
  <header class={style.header} role='contentinfo' {...rest}>
    <h1 class={style['header-name']}>
      <span>t</span><span>y</span><span>p</span><span>e</span><span>-</span><span>s</span><span>c</span><span>a</span><span>l</span><span>e</span>
    </h1>
  </header>
)
