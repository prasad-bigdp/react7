import Movie from "./Movie";
import moviesData from "./data";
function Movies ()
{
    return (
        <div className='movies'>
            {
                moviesData.map((m) => (
              <Movie url={m.image} title={m.title} />
             ))
            }
				
			</div>
		)
}
export default Movies;