import Item from "./Item"

function List(){
  return(
    <>
      <h2>Minha Lista</h2>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1985}/>
        <Item marca="Fiat" ano_lancamento={1964}/>
        <Item marca="Pegeot" ano_lancamento={1987}/>
      </ul>
    </>
  )
};
 export default List