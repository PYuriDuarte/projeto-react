import {useState} from 'react'

function Formjs(){

  function cadastrarUsuario(e){
    e.preventDefault()
    console.log('Cadastrou!!!')
  }

  const[name, setName] = useState() 
  const[password, setPassword] = useState() 

  return (
    <>
      <h1>Cadastro Simples</h1>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder="Nome Completo" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <input type="submit" value="Cadastrar"/>
        </div>
      </form>
    </>
  )

};

export default Formjs;