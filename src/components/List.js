//Trabalhando com Fragmentos
import Item from './Item'


function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2020}/>
                <Item marca="Tesla" ano_lancamento={2021}/>
                <Item />
            </ul>
        </>
    )
}export default List