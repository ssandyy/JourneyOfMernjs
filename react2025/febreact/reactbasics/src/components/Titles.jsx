import React from 'react'

const Titles = ({name, age, contactNumber, school, rollno}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h3>{contactNumber}</h3>
        <h3>{school}</h3>
        <h3>{rollno}</h3>
    </div>
  )
}

export default Titles;
