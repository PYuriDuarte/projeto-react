import axios from 'axios';
import React from 'react';

export default class ApiCarros extends React.Component{
  
  state={
    carros:[]
  }

  componentDidMount(){
    axios.get('https://APItestReact1.pedroyuri2.repl.co')
      .then(resp=>{
        const dadosCarros=resp.data
        this.setState({carros:dadosCarros})
      })
  }

  render(){
    return(
      <div>
        {this.state.carros.map(
          carro=> <div key={carro.id}>({carro.id}){carro.marca} - {carro.modelo}</div>
        )}
      </div>
    )
  }
}