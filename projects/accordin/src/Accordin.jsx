import React,{useState} from 'react'
import AccordinItem from './AccordinItem'
const Accordin = (props) =>
{
    const [openIndex,setOpenIndex]=useState(0)
    const update = (index) =>
    {
         setOpenIndex(index)
     }
  return (
		<div>
			{props.items.map((obj,index) => (
                <AccordinItem title={obj.title} content={obj.content} isOpen={openIndex===index} update={update}
                    key={index} index={index} />
			))}
		</div>
	)
}

export default Accordin
