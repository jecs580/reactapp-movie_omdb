import React from "react";
import Card from "../components/card/card";

class List extends React.Component {

    constructor(){
        super();  // Primeramente obtenemos los metodos que nos da react
        this.state={
            data:[]
        }
    }
    //Se ejecutara en cuanto el componente es mostrado en pantalla
    async componentDidMount() {
        const res = await fetch('../../assets/data.json');
        const resJSON = await res.json();
        this.setState({
            data:resJSON
        })
    }

    render(){
        return <div className="row">
            {
                // Las llaves indican que dentro se tiene codigo js.
                this.state.data.map(movie =>{
                    return <Card movie={movie} key={movie.id}/>
                })
            }
        </div>
    }
}

export default List
