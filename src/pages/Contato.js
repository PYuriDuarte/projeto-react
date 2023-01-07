import React,{useState} from 'react'
import Calculatorjs from '../components/calculadora/Calculator';
import Imcjs from '../components/imc/Imc';

const carros=[
  {categoria:"Esporte", preco:"110000", modelo:"Golf GTI", ano:"1998"},
  {categoria:"Hatch", preco:"250000", modelo:"Hyundai HB20", ano:"2013"},
  {categoria:"Hatch", preco:"290000", modelo:"JAC J3", ano:"2022"},
  {categoria:"Sedan", preco:"380000", modelo:"Chevrolet Classic", ano:"2015"},
  {categoria:"Sedan", preco:"390000", modelo:"Chevrolet Cobalt", ano:"1998"},
  {categoria:"Sedan", preco:"420000", modelo:"Honda City", ano:"1997"},
  {categoria:"SUV", preco:"800000", modelo:"Citroën C4 Cactus", ano:"2010"},
  {categoria:"SUV", preco:"260000", modelo:"Peugeot 3008", ano:"2016"},
  {categoria:"SUV", preco:"550000", modelo:"Renault Duster", ano:"2015"},
  {categoria:"Picape", preco:"890000", modelo:"Toyota Hilux", ano:"2020"},
  {categoria:"Conversíveis", preco:"680000", modelo:"Ford Mustang", ano:"2018"},
  {categoria:"Cupês", preco:"1150000", modelo:"Volkswagen Arteon", ano:"2020"},
];

const linhas=(cat)=>{
  const li=[]
  carros.forEach(
    (carro)=>{
      if(carro.categoria.toUpperCase()===cat.toUpperCase() || cat.toUpperCase() ===''){
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
            <td>{carro.ano}</td>
          </tr>
        )
      }
    }
  )
  return li
}

const tabelaCarros=(cat)=>{
  return(
    <table border='1'>
      <thead>
        <tr>
          <th>Categoria</th><th>preco</th><th>modelo</th><th>ano</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
}

const pesquisarCarro=(cat,scat)=>{
  return(
    <div>
      <label>Digite uma categoria</label>
      <input type="text" value={cat} onChange={(e)=>scat(e.target.value)}/>
    </div>
  )
}

function Contatojs(){

  const [categoria,setCategoria]=useState('')

  return (
    <div className='contato'>
      <h2>Contactjs</h2>
      <div className="body_container">
        <div>
          {pesquisarCarro(categoria,setCategoria)}
          {tabelaCarros(categoria)}
        </div>
        <div>          
          <Imcjs/>
        </div> 
        <div>          
          <Calculatorjs/>
        </div> 
      </div>
    </div>
  )

};

export default Contatojs;