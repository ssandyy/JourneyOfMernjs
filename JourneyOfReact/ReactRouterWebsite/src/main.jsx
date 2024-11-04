import { StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitUser, { gitUserInfo } from '../../../GitUser.jsx'

// 1st Way to triger routing
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// 2nd way 

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}> 
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact/>} />
    <Route path='user' element={<User />} />
    <Route path='user/:userid' element={<User />} />  {/* // http://localhost:5173/user/sandeep */}
    <Route loader={gitUserInfo} path='gituser' element={<GitUser />} />
</Route>
  ));

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>

  </StrictMode>,
)
