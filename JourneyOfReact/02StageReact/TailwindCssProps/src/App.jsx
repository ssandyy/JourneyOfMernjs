import './App.css'
import Card from './Components/Card'
import DummyDatabase from '../DummyDatabase'

function App() {

  return (
    <>
      <h3 className='bg-green-400 text-black p-4 rounded-xl'>Best Movies List</h3>
      {DummyDatabase.movies.map((item)=> (
       <Card key={item.id} item={item}/>
       
      ))}
     
    </>
  )
}

export default App
