/** @jsx h */
import { h, Component } from 'preact'

import Icon from '../icon'
import Label from './label'
import style from './numeric-picker.css'

const DEFAULT_STEP = 1

export default class NumericPicker extends Component {
  handleInputChange = (event) => {
    const value = parseFloat(event.currentTarget.value, 10)
    this.props.onChange(value)
  };

  render ({ id, label, onChange, step = DEFAULT_STEP, value, ...rest }) {
    const decrementValue = Math.round((value - step) * 10) / 10
    const incrementValue = Math.round((value + step) * 10) / 10

    return (
      <div {...rest}>
        <Label for={id}>{label}</Label>
        <div class={style['numeric-picker-wrapper']}>
          <button
            aria-controls={id}
            aria-label={`Decrease ${label} to ${decrementValue}`}
            class={style['numeric-picker-button']}
            onClick={() => onChange(decrementValue)}
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
            onChange={this.handleInputChange}
            step={step}
            type='number'
            value={value}
          />
          <button
            aria-controls={id}
            aria-label={`Increase ${label} to ${incrementValue}`}
            class={`${style['numeric-picker-button']} ${style['numeric-picker-button-alt']}`}
            onClick={() => onChange(incrementValue)}
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
