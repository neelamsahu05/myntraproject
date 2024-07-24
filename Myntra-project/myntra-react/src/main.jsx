import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider } from 'react-router-dom'
import {createBrowserRouter} from "react-router-dom"
import Bag from "./router/Bag.jsx"
import Home from './router/Home.jsx'
import myntrstore from './store/index.js'
import { Provider } from 'react-redux'
const router=   createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/", element:<Home/>},
      { path:"/bag"  ,element:<Bag/>}
    ]
    
      
    
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntrstore}>
   <RouterProvider  router={router}/>
   </Provider>
  </React.StrictMode>,
)
