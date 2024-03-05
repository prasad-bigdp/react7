import { Component } from "react";
import './App.css'
class AppClass extends Component
{
    constructor()
    {
        super()
        this.state={
            background:'#FFFFFF'
        }
    }
    change = () =>
    {
      console.log(Math.round(Math.random() * 10000000).toString(16))
			const random_color =
            "#" + Math.round(Math.random() * 10000000).toString(16)
       
			console.log(random_color)
			this.setState(random_color) 
    }
    render ()
    {
        return (
					<div
						className='changer'
                style={{ backgroundColor: this.state.background }}>
                <input type="color" name="" id="" />
						<button onClick={this.change}>change</button>
					</div>
				)
    }
}
export default AppClass