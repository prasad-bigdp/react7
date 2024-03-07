import { useState } from "react"
import './App.css'
function App ()
{
  const [background, setBackground] = useState('#000000')
  function change()
  {
    console.log(Math.round(Math.random() * 10000000).toString(16))
    const random_color = "#" + Math.round(Math.random() * 10000000).toString(16);
    console.log(random_color)
    background = random_color
    console.log(background)
    setBackground(random_color)
  }
 
  return (
    <div className="changer" style={{backgroundColor:background}}>
      <button onClick={change}>change</button>
    </div>  
  )
}
export default App