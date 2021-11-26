import logo from './logo.svg';
import './App.css';
import Eventos from './components/Eventos'
import Form from './components/Form'
import Condicional from "./components/Condicional";
import Listas from "./components/Listas";
import SeuNome from "./components/SeuNome";
/*import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'
import Item from './components/Item'*/
import {useState} from "react";


function App() {

    const [nome, setNome] = useState()

  return (
    <div className="App">
        <h1>State Lift</h1>
        {/*O SeuNome é onde digita os dados e o setNome é quem recebe*/}
        <SeuNome setNome={setNome}/>
        {nome}
     </div>
  );
}

export default App;
