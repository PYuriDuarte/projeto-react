function Saudacaojs({nome}){

  function gerarSaudacao(algumNome){
    return `Faaaala, ${algumNome}, SAFE?`
  }

  return (
    <>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  )

};

export default Saudacaojs;