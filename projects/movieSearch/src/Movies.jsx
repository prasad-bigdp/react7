import React from 'react'

const Movies = ({ moviesList }) =>
{
   
  return (
		<div>
			{moviesList &&
				moviesList.map((movie) => (
					<div>
						<img
							src={movie.Poster}
							alt={movie.Title}
						/>
						
							<h3>{movie.Title}</h3>
					
						<p>Released: {movie.Year}</p>
					</div>
				))}
		</div>
	)
}

export default Movies
