import React from 'react';

const Movie = (props) => {
    console.log(props)
    return (
        <div style={{'width': '500px', 'margin': 'auto'}} className="card text-center">
            <img  className="card-img-top" src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} />
            <div className="card-body">
                <h5 className="card-title">{props.movie.title}</h5>
                <p className="card-text">{props.movie.overview}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Movie;