import React from 'react'
class Dropdown extends React.Component{
  render(){
    return (
      <label className='label'>
          Selection: 
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
    );
  }
}

export default Dropdown
