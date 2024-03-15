import React,{useState} from "react"
import "./App.css"
const App = () => {
	const [formDetails, setFormDetails] = useState({
		username: "",
		email: "",
		password: "",
  })
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
  })
  const change = (e) =>
  {
    const { name, value } = e.target
    
    setFormDetails({...formDetails,[name]:value})
  }
  const submit = (e) =>
  {
    e.preventDefault()
    if (formDetails.password.length<6) {
		
				setFormErrors({
					...formErrors,
					password: "please enter minimum 6 characters",
				})
		}
    console.log(formDetails)
  }
	return (
		<div>
			<h1>Contact Form</h1>
			<form
				className='myForm'
				onSubmit={submit}>
				<input
					type='text'
					name='username'
					id='un'
					placeholder='Enter the name'
					onChange={change}
				/>
				{formErrors.username && <p className='error'>{formErrors.username}</p>}
				<br />
				<br />
				<input
					type='email'
					name='email'
					id='em'
					placeholder='Enter the email'
					onChange={change}
				/>
				{formErrors.email && <p className='error'>{formErrors.email}</p>}
				<br />
				<br />
				<input
					type='password'
					name='password'
					id='pwd'
					placeholder='enter the password'
					onChange={change}
				/>
				{formErrors.password && <p className='error'>{formErrors.password}</p>}
				<br />
				<br />
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default App
