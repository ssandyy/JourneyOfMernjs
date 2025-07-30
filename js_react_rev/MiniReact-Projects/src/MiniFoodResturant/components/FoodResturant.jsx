import { useEffect, useState } from 'react';

const FoodResturant = ({region, searchTerm}) => {
    const [meals, setMeals] = useState([])
    
    useEffect(() => {
        const foodApiUrl = async () => {
          let url = '';

          if (searchTerm) {
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
          } else {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${region}`;
          }

          try {
            const response = await fetch(url)
            const data = await response.json();
            setMeals(data.meals || []);
          } catch (error) {
            console.error('Error fetching data:', error);
            setMeals([]);
          }
        }
        foodApiUrl();
    }, [region, searchTerm])

  return (
    <>
    <div className='text-center flex flex-wrap p-2 gap-2 justify-center '>
      {meals.length > 0 ? (
        meals.map((food) => (
          <div key={food.idMeal}>
          <img className='w-full h-50 rounded-md border-2 border-blue-300 ' src={food.strMealThumb}  alt="" />
          <div>
            <h2> {food.strMeal}</h2> 
          </div>
          </div>
        ))) : (
          <div className='text-red-500'>No meals found for the selected region or search term.</div>
        )}
    </div>
     </>
  )
}

export default FoodResturant