import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Homejs from './pages/Home';
import Sobrejs from './pages/Sobre';
import Contatojs from './pages/Contato';
import NavBarjs from './components/Layout/NavBar';
import Footerjs from './components/Layout/Footer';
import './App.css';
// import OutraLista from './components/OutraLista';
// import SayMyName from './components/SayMyName'
// import Pessoa from './components/Pessoa';
// import Frase from './components/Frase';
// import List from './components/List';
// import Evento from './components/Evento';
// import Formjs from './components/Form';
// import {useState} from 'react'
// import SeuNomejs from './components/SeuNome';
// import Saudacaojs from './components/Saudacao';


function App() {

  return (
    <Router>
      <NavBarjs/>
      <Routes>
        <Route path='/' exact='true' element={<Homejs/>}></Route>
        <Route path='/empresa' element={<Sobrejs/>}></Route>
        <Route path='/contato' element={<Contatojs/>}></Route>
      </Routes>
      <Footerjs/>
    </Router>
  )
};

export default App;
