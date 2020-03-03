/** @jsx h */
import { Component, createRef, h } from 'preact'

/**
 * A `contenteditable` component that emits changes.
 *
 * {@link https://stackoverflow.com/a/22678516/2338194}
 */
export default class ContentEditable extends Component {
  lastText = null
  ref = createRef()

  handleChange = () => {
    const text = this.ref.current && this.ref.current.innerText
    const { onChange } = this.props

    if (onChange && text !== this.lastText) {
      onChange(text)
    }
    this.lastText = text
  };

  shouldComponentUpdate (nextProps) {
    return !!this.ref.current && nextProps.children !== this.ref.current.innerText
  }

  render () {
    const { children, onChange, ...rest } = this.props

    return (
      <div
        children={children}
        contentEditable
        onBlur={this.handleChange}
        onInput={this.handleChange}
        ref={this.ref}
        {...rest}
      />
    )
  }
}
