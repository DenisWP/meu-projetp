function Button(props){
    //Quando o html é pequeno, ou seja, vou retornar uma linha por exemplo, nao precisa dos parenteses no return.
    return <button onClick={props.event}>{props.text}</button>

}export default Button