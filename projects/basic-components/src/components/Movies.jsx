import Movie from "./Movie"
import moviesData from "../data"
function Movies ()
{
    function print(name) {
			alert("button clicked" + name)
		}
	return (
		<div className='movies'>
			{moviesData.map((m) => (
                <Movie url={m.image} title={m.title} fun={print} rating={m.rating}>
                </Movie>
            ))}
		</div>
	)
}
export default Movies
