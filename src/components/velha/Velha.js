import React,{useState} from 'react'

function Velhajs(){

  //Estilos

  const tabu={
    display:'flex',
    flexDirection:'column'
  }
  const tabuLinha={
    display:'flex',
    flexDirection:'row'
  }
  const casa={
    width:100,
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'row',
    flexDirection:'row',
    cursor:'pointer',
    fontSize:60,
    border:'1px solid #000'
  }

  const jogoInicial=[['','',''],['','',''],['','','']]
  const [jogo,setJogo]=useState(jogoInicial)
  const [simboloAtual,setSimboloAtual]=useState('X')
  const [jogando,setSogando]=useState(true)

  const tabuleiro=(j)=>{
    return(
      <div style={tabu}>
        <div style={tabuLinha}>
          <div style={casa} data-pos='00' onClick={}>{j[0][0]}</div>
          <div style={casa} data-pos='01' onClick={}>{j[0][1]}</div>
          <div style={casa} data-pos='02' onClick={}>{j[0][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='10' onClick={}>{j[1][0]}</div>
          <div style={casa} data-pos='11' onClick={}>{j[1][1]}</div>
          <div style={casa} data-pos='12' onClick={}>{j[1][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='20' onClick={}>{j[2][0]}</div>
          <div style={casa} data-pos='21' onClick={}>{j[2][1]}</div>
          <div style={casa} data-pos='22' onClick={}>{j[2][2]}</div>
        </div>
      </div>
    )
  }

  const verificaVitoria=()=>{
    //linhas
    let pontos=0
    let vitoria=false
    for(let l=0;l<3;l++){
      pontos=0;
      for(let c=0;c<3;c++){
        if(jogo[l][c]===simboloAtual){
          pontos++
        }
      }
      if(pontos >=3){
        vitoria=true
        break
        return
      }
    }
    //colunas
  }


  return (
    <>
      
    </>
  )

};

export default Velhajs;