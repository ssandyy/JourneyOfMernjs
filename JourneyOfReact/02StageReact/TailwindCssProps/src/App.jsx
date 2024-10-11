import './App.css'
import Card from './Components/Card'
import DummyDatabase from '../DummyDatabase'

function App() {

  return (
    <>
      <h3 className='bg-green-400 text-black p-4 rounded-xl'>Best Movies List</h3>
      {DummyDatabase.movies.map((item)=> (
        <>
        <Card key={item.id} item={item} btnName="Click Me"/>
        <Card key={item.id} item={item} />   {/* here button value will show default set value */}
        </>
       
       
      ))}
     
    </>
  )
}

export default App
