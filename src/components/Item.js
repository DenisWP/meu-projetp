//Importando o pacote que vem com o react para definiçao de variáveis
import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

// Valor default quando chama a propriedade e nao passa dados. Quando faz assim, o Required cai por terra.
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0

}

export default Item