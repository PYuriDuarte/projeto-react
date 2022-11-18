
import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Maria";

  return (
    <div className="App">
      <Frase/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome="Yuri"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Yuri" idade="22" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  )
};

export default App;
