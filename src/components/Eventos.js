import Button from "./evento/Button";

function Evento(){
    function meuEvento(){
    //Usar crase para poder pegar um dado
        console.log(`Ativando meu primeiro evento!`)
    }

    function segundoEvento(){
        //Usar crase para poder pegar um dado
        console.log(`Ativando meu segundo evento!`)
    }
    return (
        <div>
            <p>Clique para disparar o evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}export default Evento