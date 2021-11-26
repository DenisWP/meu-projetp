function Pessoa({nome, idade, profissao, estadocivil}){
    return (
        <div>
            <p> Fala aí {nome} tudo bom ?</p>
            <p> Idade: {idade}</p>
            <p> Profissão: {profissao}</p>
            <p> Estado Civil: {estadocivil}</p>
        </div>
    )
}export default Pessoa