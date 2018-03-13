import React from 'react';
const Tags = (props) => {
  return (
    <div className="tagContainer">
    <div className= 'tagsLabel'>Tags:</div>

   {props.tagsArr.map((tag)=>(
     <div className= 'singleTag'>
     {tag}
     </div>
   ))}
    </div>
  )
}

export default Tags

