import {useState} from "react";
import Button from "./evento/Button";

function Condicional (){

   const [email, setEmail] = useState()
   const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        console.log("Testando...")
        setUserEmail(email)
   }

    function limparEmail(){
        setUserEmail(``)
    }

    return(
        <div>
            <h2>Cadastre seu e-mail: </h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail..."
                onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={enviarEmail}>Enviar</button>
            </form>
            <p></p>
            {userEmail && (
                <div>
                    <p>O email digitado é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )
            }
        </div>
    )
}export default Condicional