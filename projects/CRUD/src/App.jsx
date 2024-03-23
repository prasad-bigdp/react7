import React,{useState} from 'react'
import Movies from './Movies'
import Form from './Form'
const App = () =>
{
  const [formOpen, setFormOpen] = useState(false)
  
  const openForm = () =>
  {
    setFormOpen(true)
  }
  const closeForm = () =>
  {
    setFormOpen(false)
  }
  
  return (
    <>
      <button className=' p-5 bg-neutral-50 text-black hover:bg-blue-500 hover:text-white' onClick={openForm}>Add new</button>
			<div className=' bg-black text-white h-100 p-10'>
        <Movies />
        <Form isOpen={formOpen} onClose={closeForm} />
			</div>
		</>
	)
}

export default App
