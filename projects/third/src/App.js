import Child from "./Child"

function App ()
{
      let images = [
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PkW4fJsvhTn3s9hnv2nSU7a5jkGYsUH9Zl7YOHZKeA&s",
				"",
				"",
			]
	let names=["prasad","raj","vani"]

	let ages =[20,25,30]
	return (
		<div>
			{names.map((n,index) =>
			(
			<Child nam={n} age={ages[index]} image={images[0]} />
			)
			)}
		</div>
			
		)
}
export default App