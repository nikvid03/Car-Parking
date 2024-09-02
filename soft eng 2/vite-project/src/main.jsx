import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'

import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Navbar from './components/Navbar.jsx';
import OwnerRegister from './components/OwnerRegister.jsx';
import UserRegister from './components/UserRegister.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/owner' element={<OwnerRegister/>}/>
    <Route path='/user' element={<UserRegister/>}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar/>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
