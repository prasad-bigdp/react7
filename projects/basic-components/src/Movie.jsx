function Movie (props)
{
 const {title,url}=props
    return (
			<div className="movie">
				<img
                src={url}
					alt='movies'
				/>
				<h2>{title}</h2>
			</div>
		)
}
export default Movie;