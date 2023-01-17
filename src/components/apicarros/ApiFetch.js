import React,{useState,useEffect} from 'react'

export default function ApiFetchjs(){

  const [carros,setCarros] = useState([])

  useEffect(()=>{
    fetch('https://APItestReact1.pedroyuri2.repl.co')
      .then((result)=>result.json())
      .then(
        (result)=>{setCarros(result)}
      )
  })

  return (
    <>
    <p>Usando Fetch</p>
      {carros.map(carro => <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>)}      
    </>
  )

};
