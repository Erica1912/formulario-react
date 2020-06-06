import React from 'react'


class SaveButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    alert('Algo ');
    event.preventDefault();
  }
  render(){
    return <input type="submit" value="Save" />
  }


}


export default SaveButton
