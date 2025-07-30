import { useState } from "react"

const Search = ({setSearchTerm}) => {
    const [searchFood, setSearchFood] = useState('')
    // const [searchResults, setSearchResults] = useState([])


 const handleSearch = (e) => {
    const value = e.target.value
    if (value.length > 0) {
        setSearchFood(value.trim());
        setSearchTerm(value.trim());
        // console.log(value)
        }
    else {
        setSearchFood('')
        setSearchTerm('')
    }
}
    
  return (
    <div className='flex justify-center items-center p-2'>
        <input className="border-green-600 border-2" type="text" value={searchFood} onChange={handleSearch} placeholder='search food..!'  />
    </div>
  )
}

export default Search