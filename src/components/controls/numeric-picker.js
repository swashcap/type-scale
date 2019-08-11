/** @jsx h */
import { h, Component } from 'preact'

import Icon from '../icon'
import Label from './label'
import style from './numeric-picker.css'

const STEP = 0.1
export default class NumericPicker extends Component {
  handleDecrementClick = () => {
    const { onChange, value } = this.props

    onChange(Math.round((value - STEP) * 10) / 10)
  };

  handleIncrementClick = () => {
    const { onChange, value } = this.props

    onChange(Math.round((value + STEP) * 10) / 10)
  };

  render ({ id, label, onChange, value, ...rest }) {
    return (
      <div {...rest}>
        <Label for={id}>{label}</Label>
        <div class={style['numeric-picker-wrapper']}>
          <button
            aria-controls={id}
            aria-label='Decrease scale'
            class={style['numeric-picker-button']}
            onClick={this.handleDecrementClick}
            type='button'
          >
            <Icon aria-hidden='true' class={style['numeric-picker-icon']} icon='minus' />
          </button>
          <input
            class={style['numeric-picker-input']}
            id={id}
            max={10}
            min={0}
            onChange={onChange}
            step={STEP}
            type='number'
            value={value}
          />
          <button
            aria-controls={id}
            aria-label='Increase scale'
            class={`${style['numeric-picker-button']} ${style['numeric-picker-button-alt']}`}
            onClick={this.handleIncrementClick}
            type='button'
          >
            <Icon aria-hidden='true' class={style['numeric-picker-icon']} icon='plus' />
          </button>
        </div>
      </div>
    )
  }
}
