import { useEffect, useState } from 'react';

const Categories = ({setRegion}) => {
    const [categories, setCategories] = useState([])
    const [totalCategoriesLength, setTotalCategoriesLength] = useState(0);
    const [limit, setLimit] = useState(8);
    
    useEffect(() => {
        const categoryAPi = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            const data = await response.json()
            setTotalCategoriesLength(data.meals.length);
            setCategories(data.meals.slice(0, limit))
        } 
        categoryAPi();
    }, [limit])

    
    return (
        <>
        <p>Category</p>
            <div className="flex flex-wrap justify-center gap-2 p-2">
               
                {categories.map((category) => (
                    <div className='justify-center' key={category.strArea}>
                        <button
                            className="bg-amber-500 px-2 py-2 rounded hover:bg-blue-600 transition"
                            type="button"
                            onClick={() => setRegion(category.strArea)}
                        >
                            {category.strArea}
                        </button>
                    </div>
                ))}
                
            </div>
            {categories.length > 8 &&
                
                <button className='bg-red-500 p-2 m-2' type="button"  onClick={() => setLimit((prev) => (prev > 8 ? prev - 8 : prev))}>Load Less(-)</button>
                }
            {categories.length < totalCategoriesLength && 
                
                <button className='bg-green-400 p-2' type="button" onClick={() => setLimit(prev => prev + 8)}>Load More (+)</button>
                }
                
        </>
    )
}

export default Categories