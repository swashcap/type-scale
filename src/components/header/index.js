/** @jsx h */
import { h } from 'preact'

import style from './style.css'

export default ({ children, class: className, ...rest }) => (
  <header class={style.header} role='banner' {...rest}>
    <h1 aria-label='Type scale' class={style['header-name']}>
      <span>t</span><span>y</span><span>p</span><span>e</span><span>-</span><span>s</span><span>c</span><span>a</span><span>l</span><span>e</span>
    </h1>
    <div class={style['header-content']}>
      {children}
    </div>
    <small class={style['header-fine-print']}>Source code <a href='#'>on GitHub</a>.</small>
  </header>
)
