import React from 'react'

function Card({item}) {
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black m-5">
          <img
            src={item.posterUrl}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              {item.genres.join(', ')}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{item.title}</h2>
          </div>
          <p className="text-gray-300">
            {item.plot}
          </p>
          <button className='bg-grey' >Click </button>
        </div>
    )
}

export default Card
