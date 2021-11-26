function Listas ({itens}){
    return(
        <>
            <h3>Listas de coisas boas:</h3>

            {/*Exemplo de um if em JSX e um else que é os dois pontos (:)*/}

            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <p>Nao há itens na lista</p>
            )
            }
        </>
    )
}export default Listas