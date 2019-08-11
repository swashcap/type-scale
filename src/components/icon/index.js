/** @jsx h */
import { h } from 'preact'

const MinusIcon = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' {...props}>
    <path d='M0 0v2h8v-2h-8z' transform='translate(0 3)' />
  </svg>
)

const PlusIcon = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' {...props}>
    <path d='M3 0v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z' />
  </svg>
)

/**
 * Icon
 *
 * Select icons from iconic.
 *
 * {@link https://github.com/iconic/open-iconic/blob/master/svg/minus.svg}
 */
export default ({ icon, ...rest }) => {
  if (icon === 'minus') {
    return <MinusIcon {...rest} />
  } else if (icon === 'plus') {
    return <PlusIcon {...rest} />
  }

  return null
}
