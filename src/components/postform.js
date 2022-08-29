import React,{Component} from "react";
import axios from "axios";

class PostForm extends Component{
constructor(props){
    super(props)
    this.state={
        name:''
    }
}

cargarDatos=teclado=>{
    this.setState({[teclado.target.name]: teclado.target.value})//dice que tanto como atributo name y el value deben ser iguales
    //de non ser aasi nos impide digitar dentro del input
}

enviar=datos=>{
    datos.preventDefault();
    console.log(this.state.name);
    axios.post("https://jsonplaceholder.typicode.com/users", this.state)
    .then(respuesta=>{
        console.log(respuesta)
    })
    .catch(error=>console.log(error))
}
    render(){
        const {name}=this.state;

        return(
            <form onSubmit={this.enviar}>
            <div>
                <input name="name" value={name} onChange={this.cargarDatos}/>
            </div>
            <button>enviar</button>
            </form>
        );
    }
}

export default PostForm