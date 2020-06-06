import React from 'react'
class Dropdown extends React.Component{
  render(){
    return<label>Option Object<select>
            <option selected hidden>Seleccione</option>
            <option value="1">Grapefruit</option>
            <option value="2">Lime</option>
            <option value="3">pineapple</option>
          </select></label>
  }
}

export default Dropdown
