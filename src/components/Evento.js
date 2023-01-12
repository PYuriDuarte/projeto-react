import Buttonjs from "./Button";

function Evento(){
  function meuEvento(){
    console.log('Opa, fui ativado!')
  }

  return (
    <>
      <p>Click para disparar um evento:</p>
      <Buttonjs event={meuEvento} text="Primeiro Evento" />
      <button onclick={meuEvento}>Ativar</button>
    </>
  )

};

export default Evento;