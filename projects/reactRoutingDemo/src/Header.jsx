import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
		<header>
			{/* <img src={ } alt={ } /> */}
			<nav>
				<button>
					<Link to='/'>Home</Link>
				</button>
				<button>
					<Link to='/About'>About</Link>
				</button>
				<button>
					<Link to='/contact'>Contact</Link>
				</button>
			</nav>
		</header>
	)
}

export default Header
