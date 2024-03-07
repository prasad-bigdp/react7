import React,{useState} from 'react'

const AccordinItem = (props) =>
{
      
    const {title,content,isOpen,update,index}= props
  return (
		<div>
			<h1>
              <button onClick={() => update(index)}>{title} <span>{ isOpen ?'-':'+'}</span></button>
			</h1>
          {isOpen && <p>{content}</p>}
		</div>
	)
}

export default AccordinItem
