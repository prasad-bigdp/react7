import React, { useLayoutEffect,memo } from 'react'

const Child = (props) =>
{
    function display () { console.log("child called") }
    display()
  return (
      <div>
          {props.name}
          {props.children}
         
    </div>
  )
}

export default memo(Child)
