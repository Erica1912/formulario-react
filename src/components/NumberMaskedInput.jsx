import React from 'react'
import PropTypes from 'prop-types'


const mask = value => value ? new Intl.NumberFormat('en').format(value) : ''

const unmask = value => (value || '').replace(new RegExp(',', 'g'), '')


class NumberMaskedInput extends React.Component {

  constructor(props) {
    super(props);

    const {value} = props
    this.state = {value}
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    const {value} = e.target
    const maskedValue = unmask(value)
    this.setState({value: mask(maskedValue)})
  }


  render() {
    return (
      <label htmlFor={this.props.id} >
        <span>{this.props.label}</span>
        <input
          id={this.props.id}
          placeholder="Type Number"
          type="text"          
          value={this.state.value}
          onChange={this.handleChange}/>
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
