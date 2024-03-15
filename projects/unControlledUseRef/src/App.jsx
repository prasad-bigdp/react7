import React,{useRef} from 'react'
import './App.css'
const App = () =>
{
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(userRef.current.value,emailRef.current.value,passwordRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={userRef}/><br /><br />
      <input type="email" name="" id="em" ref={emailRef} /><br /><br />
      <input type="password" name="" id="pwd" ref={passwordRef} /><br /><br />
      <button type="submit">submit</button>
    </form>
  )
}

export default App
