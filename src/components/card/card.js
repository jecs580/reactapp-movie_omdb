import React from "react";
import PropTypes from "prop-types";
class Card extends React.Component {

    render() {
        const { movie } = this.props;
        return (
            <div className="col-md-4">
                <div className="card">
                    <img src={movie.Poster !== 'N/A' ? movie.Poster:'https://laspalmas.com.bo/wp-content/uploads/2016/06/Sin_imagen_disponible.jpg'} alt={movie.Title} className="card-img-top" width="100" />
                    <div className="card-body">
                        <h4>{movie.Year} {movie.Title}</h4>
                        <p>{movie.Type}</p>
                    </div>
                </div>
            </div>
        )
    }
}
/* Definimos el tipo de dato que recibira el componente.Como recibe un objeto podemos especificar el tipo de 2 maneras:
1: Colocando shape() y adentro definimos cada valor del objeto con el tipo de dato.
2: Colocando object() y no colocamos nada adentro. 
Con el isRequired declaramos que es necesario pasar el objeto para ejecutar el componente.
*/
Card.propTypes = {
    movie:PropTypes.shape({
        Title:PropTypes.string,
        Year:PropTypes.string,
        Poster:PropTypes.string,
        Type:PropTypes.string
    }).isRequired
}
export default Card
