// App.js
import React from "react"
import Movies from "./Movies"
import { MovieProvider } from "./MovieContext"

const App = () => {
	return (
		<MovieProvider>
			<div>
				<Movies />
			</div>
		</MovieProvider>
	)
}

export default App
