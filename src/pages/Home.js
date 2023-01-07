import React,{useState} from "react"
import Ligada from '../img/ligada.jpg';
import Desligada from '../img/desligada.jpg';
import Quebrada from '../img/quebrada.jpg';
import Turnon from '../img/turn-on.png';
import Turnoff from '../img/turn-off.png';

function Homejs(){

  const [ligado, setLigado] = useState(false)

  return (
    <>
      <h1>Home</h1>
      <img src={ligado?Ligada:Desligada} alt="Lampada ligada"/>
      <button onClick={()=>setLigado(!ligado)}>{ligado?"Desligar":"Ligar"}</button>
    </>
  )

};

export default Homejs;