import React from 'react'

const Buttons = ({link, bname}) => {
  console.log("asdfgh");
  
  return (
    <div>
      <li>
        <a href={link}>{bname}</a>
      </li>
    </div>
    
  );
}

export default Buttons