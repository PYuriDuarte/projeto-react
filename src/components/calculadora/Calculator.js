import React,{useState} from "react";

function Calculatorjs(){

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operacao,setOperacao]=useState(false)

  //Funções

  const addDigitoTela=(d)=>{
    if((d == '+' || d == '-' || d == '*' || d == '/') && operacao){
      setOperacao(false)
      setValorTela(resultado+d)
      return
    }
    if(operacao){
      setValorTela(d)
      setOperacao(false)
      return
    }
    const valorDigitadoTela=valorTela+d
    setValorTela(valorDigitadoTela)
  }
  const limparMemoria=()=>{
    setOperacao(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }
  const operando=(opera)=>{
    if(opera == 'bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperacao(false)
      return
    }
    try{
      const r=eval(valorTela)
      setAcumulador(r)
      setResultado(r)
      setOperacao(true)
    }catch{
      setResultado('ERRO')
    }
  }


  //Componentes

  const Tela=(valor,result)=>{
    return(
      <div style={cssTela}>
        <span style={cssTelaOperacao}>{valor}</span>
        <span style={cssTelaResultado}>{result}</span>
      </div>
    )
  }

  const Botao=(label,onClick)=>{
    return(
      <button style={cssBotao} onClick={onClick}>{label}</button>
    )
  }

  //Estilos

  const cssConteiner={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'fcenter',
    flexDirection:'column',
    width:300,
    backgroundColor:'#222',
    color:'#fff',
    border:'1px solid #000'
  }

  const cssBotoes={
    flexDirection:'row',
    flexWrap:'wrap'
  }

  const cssTela={
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-end',
    paddingLeft:20,
    paddingRight:20,    
    backgroundColor:'#222',
    flexDirection:'column',
    width:260
  }
  const cssTelaOperacao={
    fontSize:16,
    color:'#fff',
    height:20
  }
  const cssTelaResultado={
    fontSize:50,
    color:'#fff'
  }
  const cssBotao={
    fontSize:20,
    height:50,
    width:70,
    padding:20,
    backgroundColor:'#444',
    color:'#fff',
    borderRadius:'6px',
    borderColor:'#222',
    textAlign:'center',
    outline:'none'
  }

  return (
    <div style={cssConteiner}>
      <h3>Calculadora Simples</h3>
      {Tela(valorTela,resultado)}
      <div style={cssBotoes}>
        {Botao('AC',limparMemoria)}
        {Botao('(',()=>addDigitoTela('('))}
        {Botao(')',()=>addDigitoTela(')'))}
        {Botao('<',()=>operando('bs'))}
        {Botao('7',()=>addDigitoTela('7'))}
        {Botao('8',()=>addDigitoTela('8'))}
        {Botao('9',()=>addDigitoTela('9'))}
        {Botao('/',()=>addDigitoTela('/'))}
        {Botao('4',()=>addDigitoTela('4'))}
        {Botao('5',()=>addDigitoTela('5'))}
        {Botao('6',()=>addDigitoTela('6'))}
        {Botao('*',()=>addDigitoTela('*'))}
        {Botao('1',()=>addDigitoTela('1'))}
        {Botao('2',()=>addDigitoTela('2'))}
        {Botao('3',()=>addDigitoTela('3'))}
        {Botao('-',()=>addDigitoTela('-'))}
        {Botao('N',()=>addDigitoTela('N'))}
        {Botao('0',()=>addDigitoTela('0'))}
        {Botao('.',()=>addDigitoTela('.'))}        
        {Botao('+',()=>addDigitoTela('+'))}
        {Botao('=',()=>operando('='))}
      </div>
    </div>
  )

};

export default Calculatorjs;