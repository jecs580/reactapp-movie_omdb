import React from "react";

class Card extends React.Component {

    render() {
        const { movie } = this.props;
        return (
            <div className="col-md-4">
                <div className="card">
                    <img src={movie.Poster} className="card-img-top" width="100" />
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
