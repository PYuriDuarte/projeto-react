
import './App.css';
// import OutraLista from './components/OutraLista';
// import SayMyName from './components/SayMyName'
// import Pessoa from './components/Pessoa';
// import Frase from './components/Frase';
// import List from './components/List';
// import Evento from './components/Evento';
// import Formjs from './components/Form';
import {useState} from 'react'
import SeuNomejs from './components/SeuNome';
import Saudacaojs from './components/Saudacao';


function App() {

  const [nome, setNome] = useState();

  return (
    <div className="App">
      <h1>State Lift</h1>      
      <SeuNomejs setNome={setNome}/>
      <Saudacaojs nome={nome}/>
    </div>
  )
};

export default App;
