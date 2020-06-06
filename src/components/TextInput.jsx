import React from 'react'
class TextInput extends React.Component{
  render(){
    return <React.Fragment>
              <label className='label'> {this.props.label} </label>
              <input
                type="number"
                value={this.changeNumber}
                placeholder="Type the number"
              />
            </React.Fragment>
  }
  changeNumber(){
    return this.props.value

  }
}

export default TextInput
