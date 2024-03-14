import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const mainContext = createContext()
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
			<App />
	</React.StrictMode>,
)
