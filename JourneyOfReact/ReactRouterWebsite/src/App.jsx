import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Test from './Test';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
       <Outlet />
      <Footer /> 
      {/* <Test /> */}
    </>
  )
}

export default App
