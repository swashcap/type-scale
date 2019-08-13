/** @jsx h */
import { h, Component } from 'preact'

import Icon from '../icon'
import Label from './label'
import style from './numeric-picker.css'

const DEFAULT_STEP = 1

export default class NumericPicker extends Component {
  handleDecrementClick = () => {
    const { onChange, step = DEFAULT_STEP, value } = this.props

    onChange(Math.round((value - step) * 10) / 10)
  };

  handleIncrementClick = () => {
    const { onChange, step = DEFAULT_STEP, value } = this.props

    onChange(Math.round((value + step) * 10) / 10)
  };

  render ({ id, label, onChange, step = DEFAULT_STEP, value, ...rest }) {
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
            <span>
              <Icon aria-hidden='true' class={style['numeric-picker-icon']} icon='minus' />
            </span>
          </button>
          <input
            class={style['numeric-picker-input']}
            id={id}
            max={10}
            min={0}
            onChange={onChange}
            step={step}
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
            <span>
              <Icon aria-hidden='true' class={style['numeric-picker-icon']} icon='plus' />
            </span>
          </button>
        </div>
      </div>
    )
  }
}
