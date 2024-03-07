import React from 'react'
import Accordin from './Accordin'
const App = () =>
{
  const items = [
		{
			title: "Title1",
			content:
				"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor vehicula eros in dignissim. Suspendisse rhoncus et ipsum nec auctor. Nullam id purus blandit, consectetur dui quis, aliquam sapien. Aliquam tristique, diam quis lacinia fringilla, nulla mi ornare tellus, sed congue eros diam id massa. Aliquam blandit, ligula ac vehicula pulvinar, odio felis pulvinar orci, ac feugiat quam odio eu mi. Quisque eget tempus augue. Nulla pretium nisl nec quam rhoncus, ",
		},
		{
			title: "Title2",
			content:
				"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor vehicula eros in dignissim. Suspendisse rhoncus et ipsum nec auctor. Nullam id purus blandit, consectetur dui quis, aliquam sapien. Aliquam tristique, diam quis lacinia fringilla, nulla mi ornare tellus, sed congue eros diam id massa. Aliquam blandit, ligula ac vehicula pulvinar, odio felis pulvinar orci, ac feugiat quam odio eu mi. Quisque eget tempus augue. Nulla pretium nisl nec quam rhoncus, ",
		},
		{
			title: "Title3",
			content:
				"lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor vehicula eros in dignissim. Suspendisse rhoncus et ipsum nec auctor. Nullam id purus blandit, consectetur dui quis, aliquam sapien. Aliquam tristique, diam quis lacinia fringilla, nulla mi ornare tellus, sed congue eros diam id massa. Aliquam blandit, ligula ac vehicula pulvinar, odio felis pulvinar orci, ac feugiat quam odio eu mi. Quisque eget tempus augue. Nulla pretium nisl nec quam rhoncus, ",
		},
	]
  return (
    <div>
      <Accordin items={items} />
    </div>
  )
}

export default App
