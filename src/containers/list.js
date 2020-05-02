import React, { Fragment } from "react";
import Card from "../components/card/card";
const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=a0a6b836';
class List extends React.Component {

  constructor() {
    super();  // Primeramente obtenemos los metodos que nos da react
    this.state = {
      data: [],
      searchTerm:'',
      error:'',
      loading:true
    }
  }
  //Se ejecutara en cuanto el componente es mostrado en pantalla
  async componentDidMount() {
    // const res = await fetch('../../assets/data.json');
    const res = await fetch(`${API}&s=batman`)
    const resJSON = await res.json();
    this.setState({
      data: resJSON.Search,
      loading:false
    })

  }

  async handleSubmit(e){
    e.preventDefault(); // Cancelamos el evento de enviar al momento de dar Enter.
    if(!this.state.searchTerm){
      // Condicion cuando searchTerm este vacio
      return this.setState({error:'Por favor escribe un texto valido'})
    }

    const res = await fetch(`${API}&s=${this.state.searchTerm}`);
    const data = await res.json(); 
    if(!data.Search){
      return this.setState({error:'No hay resultados'});
      
    }
    this.setState({
      data:data.Search,
      error:'',
      searchTerm:'',
      loading:false
    })
    
  }
  render() {
    const {data,loading}=this.state;  // Obtenemos los datos de data y loading
    if(loading){
      return <h3 className="text-white">Loading...</h3>
    }
    else{
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-4 offset-md-4 p-4">
            {/* Usamos el offset-md-4 para centrar el contenido */}
            <form onSubmit={(e) => this.handleSubmit(e)} action="">
              {/* Si solo tenemos un elemento dentro del form(input) al precionar Enter, el form se enviara por defecto */}
              <input type="text" className="form-control" placeholder="search" onChange={e=>this.setState({searchTerm:e.target.value})} autoFocus value={this.state.searchTerm}/>
            </form>
            <p className="text-white">{this.state.error ? this.state.error :''}</p>
            {/* Usamos un operador termario para hacer la condicional en una linea */}
          </div>
        </div>
        <div className="row">
          {
            // Las llaves indican que dentro se tiene codigo js.
            data.map(movie => {
              return <Card movie={movie} key={movie.imdbID} />
            })
          }
        </div>
      </Fragment>
    )
    }
  }
}

export default List
