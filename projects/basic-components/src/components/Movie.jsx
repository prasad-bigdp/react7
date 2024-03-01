function Movie (props)
{
	
	
    return (
			<div className='movie'>
				{props.rating < 8 && (
					<div>
						<img
							src={props.url}
							alt='movies'
						/>
						<p>rating:{props.rating}</p>
					</div>
				)}
				<h2>{props.title}</h2>
				<p>{props.children}</p>
				<button onClick={() => props.fun(props.title)}>see the movie</button>
			</div>
		)
}
export default Movie;