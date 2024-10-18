import './App.css'
import NavBar from './components/NavBar'
import NavBar2 from './components/NavBar2'
import About from './pages/About'
import { useState } from 'react'


function App() {
  const [page, setPage] = useState("/")


  const pagination = () => {
    if(page == "/about") {
      return(
        <About />
      )
    }
    return( page = "/")
  }

  return (
    <>
       {/* <NavBar /> */}
       <NavBar2 />
       <h2>Welcome to Home Page</h2>
       
    </>
  )
}

export default App
