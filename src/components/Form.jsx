import React from 'react'
import TextInput from './TextInput'
import Dropdown from './Dropdown'
import SaveButton from './SaveButton'
import NumberMaskedInput from './NumberMaskedInput'

class Form extends React.Component{
  contructor(props){
    this.value = props.value;
  }
  render(){
    return <form className="form" >
              <TextInput label="Valor: " /><br/>
              <Dropdown /><br/>
              <TextInput label="TRM: "/><br/>
              <NumberMaskedInput /><br/>
              <SaveButton /><br/>

            </form>
  }
}

export default Form
