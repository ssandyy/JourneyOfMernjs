import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './screens/About'
import HomeRegister from './screens/HomeRegister'
import Schools from './screens/Schools'
import Signup from './screens/Signup'
import UserList from './screens/UserList'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRegister />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/users",
    element: <UserList />
  },
  {
    path: "/schools",
    element: <Schools />
  },
  {
    path: "/home-register",
    element: <HomeRegister />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);


function App() {

  return (
    <>
      <h1>Hello React..!</h1>
      
      {/* <HomeRegister />
      <Signup />
      <About />
      <Contact />
      <UserList />
      <Schools /> */} 

      <RouterProvider router={router} />
    </>
  )
}

export default App
