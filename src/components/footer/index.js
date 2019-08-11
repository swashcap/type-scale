/** @jsx h */
import { h } from 'preact'

import style from './style.css'

export default (props) => (
  <footer class={style.footer} role='contentinfo'>
    <small class={style['footer-fine-print']}>Source code <a href='#'>on GitHub</a>.</small>
  </footer>
)
