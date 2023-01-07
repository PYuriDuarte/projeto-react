import React, { useState } from "react"
function Sobrejs(){

  const cumprimento=()=>{
    const hora=new Date().getHours()
    if(hora >= 0 && hora < 13){
      return <p>Bom Dia</p>
    }else if(hora >= 13 && hora < 18 ){
      return <p>Boa Tarde</p>
    }else{
      return <p>Boa Noite</p>
    }
  }

  const [cor, setCor]=useState(1);

  const preto={color:"#000"};
  const cinzaclaro={color:"#ccc"};
  const cinzaescuro={color:"#555"};

  const cores = [
    {color: "#000"},
    {color: "#00f"},
    {color: "#f00"},
    {color: "#0f0"}
  ];

  const listaCores = cores.map(
    (color, indice)=>
      <li key={indice}>{color.color}</li>
  );

  const retornaC=(c)=>{
    if(c==1){
      return  ({color: "#00f"})
    }else if(c==2){
      return preto
    }else if(c==3){
      return cinzaclaro
    }else{
      return cinzaescuro
    }
  }

  const mudarCor=()=>{
    setCor(cor+1)
    if(cor > 3){
      setCor(1)
    }
  }

  // setInterval(mudarCor, 5000)

  const alerta =()=>{
    return alert('botão clicado');
  }

  return (
    <>
      <h1 style={retornaC(cor)}>Sobre</h1>
      <button onClick={()=>mudarCor()}>Mudar a cor</button>
      <p>Conteúdo da página</p>
      <ul>
        {listaCores}
      </ul>         
      <div>
        {cumprimento()}        
      </div>
      <button onClick={()=> alerta()}>Botão</button>
    </>
  )

};

export default Sobrejs;