import React from 'react'
import TextInput from './TextInput'
import Dropdown from './Dropdown'
import SaveButton from './SaveButton'

class Form extends React.Component{
  contructor(props){
    this.value = props.value;
  }
  render(){
    return <form >
              <TextInput label="Valor" /> <br/>
              <Dropdown /><br/>
              <TextInput label="TRM"/> <br/>
              <SaveButton />
            </form>
  }
}

export default Form
