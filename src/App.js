import React from 'react';
import './App.css';
import Login from './components/Login';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './components/Product';
import RegisteredCourse from './components/RegisteredCourse';
import Detail from './components/Detail';
import Basket from './components/Basket';
import Singin from './components/Singin';
import Basketusta from './components/Basketusta';
import Landing from './components/Landing';




const router = createBrowserRouter([
  {
    path:'/', 
    element:<MainLayout/>,
    children:
    [
      {
        path:'/', element:<Landing/>
      },
      {
        path:'/home', element:<Home/>
      },
      {
        path:'/product', element:<Product/>
      },
      {
        path:'/product/:param', element:<Product/>
      },
      {
        path:'productDetail/:id', element:<Detail/>
      },
      {
        path:'basketusta/', element:<Basketusta/>
      },
      {
        path:'basket/', element:<Basket/>
      },
      {
        path:'basket/:id', element:<Basket/>
      },
  
      {
        path:'/registered', element:<RegisteredCourse/>
      }
    ]
  },
  {
    path:'/login', 
    element:<Login/>,
    
  },
  {
    path:'/singin', 
    element:<Singin/>,
    
  }
]);


function App() {
  return (
    

      <RouterProvider router= {router}/>

  );
}

export default App;
