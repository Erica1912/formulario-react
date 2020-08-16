import React from 'react'
//import TextInput from './TextInput'



class Prueba extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
           name: 'black-2-white-2'
       };
   }

   componentDidMount() {
       // Simple POST request with a JSON body using fetch
       const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ name: 'black-2-white-2' })
       };
       fetch('pokeapi.co/api/v2/pokemon/ditto', requestOptions)
           .then(response => console.log(response))

   }

   render() {
              return (
           <div className="card text-center m-3">
               <h5 className="card-header">Simple POST Request</h5>
               <div className="card-body">
                   console.log("hola")
               </div>
           </div>
       );
   }
}
export default Prueba
