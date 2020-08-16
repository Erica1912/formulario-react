import React from 'react'
import TextInput from './TextInput'
import Dropdown from './Dropdown'
import SaveButton from './SaveButton'
import NumberMaskedInput from './NumberMaskedInput'

class Form extends React.Component{
  contructor(props){
    this.value = props.value;
  }

  _handleChange = (e) => {
  this.setState({ inputMovie: e.target.value })
}

_handleSubmit = (e) => {
  e.preventDefault()
  const { inputMovie } = "hola"

  fetch(`http://www.omdbapi.com/?apikey="hola"&s=${inputMovie}`)
    .then(res => res.json())
    .then(results => {
      const { Search = [], totalResults = "0" } = results
      const SearchResults = Search || []
      console.log({ Search, totalResults});
      this.props.onResults(Search)
    })
}



  render(){
    return <form onSubmit={this._handleSubmit}>
              <h1>Formulario</h1>
              <NumberMaskedInput label="Valor: " className="inputNumber"/><br/>
              <Dropdown /><br/>
              <NumberMaskedInput label="TRM: " className="inputNumber"/><br/>
              <SaveButton/><br/>

            </form>
  }
}

export default Form
