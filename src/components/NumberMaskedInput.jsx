import React from 'react'
import PropTypes from 'prop-types'


const mask = value => value ? new Intl.NumberFormat('en').format(value) : ''

const unmask = value => (value || '').replace(new RegExp(',', 'g'), '')

/**
 * NumberMaskedInput component
 * Created by habib on 5/06/2020
 *
 * @public
 * @class
 * @module Generics
 *
 * @author habib
 */
class NumberMaskedInput extends React.Component {
  /**
   * Class constructor
   *
   * @param {React.ComponentProps} props of the component
   */
  constructor(props) {
    super(props);

    const {value} = props
    this.state = {value}
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Handle input change
   * @event onchange
   * @param {HashChangeEvent} e
   */
  handleChange(e) {
    const {value} = e.target
    const maskedValue = unmask(value)
    this.setState({value: mask(maskedValue)})
  }

  /**
   * Render class method
   *
   * @returns {React.ReactNode}
   */
  render() {
    return (
      <label htmlFor={this.props.id} className="label">
        <span>{this.props.label}</span>
        <input id={this.props.id} type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
    )
  }
}

NumberMaskedInput.defaultProps = {
  value: '',
  id: new Date().getTime().toString()
}

NumberMaskedInput.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
}

export default NumberMaskedInput
