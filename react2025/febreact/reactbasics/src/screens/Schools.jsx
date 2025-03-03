import React from 'react'
import SchoolList from '../warehouse/SchoolList'
import SchoolCard from '../components/SchoolCard'

const Schools = () => {
  return (
    <>
        {SchoolList.map((school) => {
            return (
                <div key={school.id}>
                    <h3>{school.name} in {school.location}</h3>
                    
                </div>
            )
        })}

        {/* OR  - break in componenet */}
        {/* Best practice */}
        <h1>Schools List from componenet break..!</h1>
        <h2 style={{color:'red'}}>School details Card..!</h2>
        {SchoolList.map(({id, name, location}) => (
            <SchoolCard key={id} name={name} location={location} />
        ))}
    </>
  )
}

export default Schools