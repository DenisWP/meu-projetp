import { useState } from 'react'

function Form (){

    function cadastrarUsuario(e){
        e.preventDefault() // Usado para parar o comportamento padrao do HTML e acontece o que estiver abaixo.
        console.log(name)
        console.log(`Cadastrou o usuário ${name} com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div> Meu Cadastro
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" id="nome" name="name" placeholder= "Digite o seu nome:"
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Senha: </label>
                 <input type="password" id="password" name="password" placeholder= "Digite sua senha: "
                 onChange={(e) => setPassword(e.target.value)}
                 />
             </div>
             <div>
                 <input type="submit" value= "Cadastrar"/>
             </div>
        </form>
        </div>
    )
}export default Form