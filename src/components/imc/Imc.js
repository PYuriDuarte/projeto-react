import React,{useState} from 'react'

const tabelaIMC=()=>{
  return(
    <table border='1' style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>          
          <td>MAGREZA</td>
          <td>MENOR QUE 18,5</td>        
        </tr>
        <tr>
          <td>NORMAL</td>
          <td>ENTRE 18,5 E 24,9</td>                    
        </tr>
        <tr>
          <td>SOBREPESO</td>
          <td>ENTRE 25,0 E 29,9</td>                    
        </tr>
        <tr>
          <td>OBESIDADE</td>
          <td>ENTRE 30,0 E 39,0</td>                   
        </tr>
        <tr>
          <td>OBESIDADE</td>
          <td>MAIOR QUE 40,0</td>          
        </tr>
      </tbody>
    </table>
  )
}

const formPeso=(p,setp)=>{
  return(
    <div>
      <label>
        Peso 
        <input type="text" value={p} onChange={(e)=>{setp(e.target.value)}}/>
      </label>
    </div>
  )
}

const formAltura=(a,seta)=>{
  return(
    <div>
      <label>
        Altura 
        <input type="text" value={a} onChange={(e)=>{seta(e.target.value)}}/>
      </label>
    </div>
  )
}

const formCalcular=(p,a,setr)=>{
  
  const calc=()=>{
    setr(p/(a*a))
  }

  return(
    <div>
      <button onClick={calc}>Calcular IMC</button>
    </div>
  )
}

const formResultado=(r)=>{
  return(
    <div>
      <p>Resultado: {r.toFixed(2)}</p>
    </div>
  )
}

function Imcjs(){

  const [peso,setPeso]=useState(0);
  const [altura,setAltura]=useState(0);
  const [resultado,setResultado]=useState(0);

  return (
    <div className='flex'>
      {formPeso(peso,setPeso)}
      {formAltura(altura,setAltura)}
      {formCalcular(peso,altura,setResultado)}
      {formResultado(resultado)}
      {tabelaIMC()}
    </div>
  )

};

export default Imcjs;