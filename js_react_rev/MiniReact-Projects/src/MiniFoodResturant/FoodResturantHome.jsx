import { useState } from 'react'
import Categories from './components/Categories'
import FoodResturant from './components/FoodResturant'
import Search from './components/Navbar/Search'

const FoodResturantHome = () => {
  const [selectedRegion, setSelectedRegion] = useState('Indian')
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <> 
        <Categories setRegion={setSelectedRegion} />
        <Search setSearchTerm={setSearchTerm} />
        <FoodResturant region={selectedRegion} searchTerm={searchTerm} />
    </>
  )
}

export default FoodResturantHome