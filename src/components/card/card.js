import React from "react";

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

export default Card
