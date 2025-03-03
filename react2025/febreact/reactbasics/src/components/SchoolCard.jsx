import React from 'react'

const SchoolCard = ({id, name, location}) => {
  return (
    <>
        <div key={id}>
            <h2>{name}</h2>
            <h3>{location}</h3>
        </div>
    </>
  )
}

export default SchoolCard;