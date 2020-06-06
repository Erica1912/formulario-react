import React from 'react'
class TextInput extends React.Component{
  render(){
    return <React.Fragment>
              <label>{this.props.label}</label>
              <input type="number" value={this.changeNumber}/>
            </React.Fragment>
  }
  changeNumber(){
    return this.props.value

  }
}

export default TextInput
