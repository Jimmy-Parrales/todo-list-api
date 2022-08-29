import React,{Component} from "react";
import axios from "axios";

class Postlist extends Component{
    constructor(props){
        super(props)

        this.state={
            post:[]//recibe muchos datos
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")//podemos ligarlo con axion en ves de fecth

        .then(respuesta=>{//promesa en caso que se cumpla o jale los datos nos imprime la respuesta 

        console.log(respuesta)//por consola la respuesta

        this.setState({post: respuesta.data})})//ligamos los datos json a set state de post, en el json hay un dato que dice data y dentro de data esta 
        //task y el id         data como objeto y id y task com o atributos 

        .catch(error=>console.log(error))//nos muestra el error
    }
    render(){
        const {post}=this.state;//es para no utilizar this.post y manejarlo directo con post
        return(
            <div>
                Lista Tareas
                {
                    post.length ?
                    post.map(posts=> <div key={posts.id}>{posts.name}</div>):null
                }
            </div>
        );
    }
}

export default Postlist