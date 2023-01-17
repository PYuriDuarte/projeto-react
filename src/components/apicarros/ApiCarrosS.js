import React,{useState, useEffect} from "react";
import axios from "axios";

export default function ApiCarrosSjs(){

  const [carros, setCarros] = useState([])

  useEffect(()=>{
    axios.get('https://APItestReact1.pedroyuri2.repl.co')
      .then(resp=>{
        const dadosCarros=resp.data
        setCarros(dadosCarros)
      })
  })

  return (
    <>
    <p>Usando Axios em componente padrão</p>
      {carros.map(carro => <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>)}      
    </>
  )

};