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
    return <form
            style={{
              background:'white',
              margin:'5px',
              padding:'5rem',
              width: '500px',
              height: '200px',
            }}>

              <NumberMaskedInput label="Valor: " className="label"/><br/>
              <Dropdown /><br/>
              <NumberMaskedInput label="TRM: " className="label"/><br/>
              <SaveButton /><br/>

            </form>
  }
}

export default Form
