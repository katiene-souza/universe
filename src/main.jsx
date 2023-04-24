import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Initial from './componentes/inicial';
import Card from './componentes/card/index';



const router = createBrowserRouter([
  {
    path:"/",
    element: <Initial />
  },
  {
    path:"card",
    element: <Card/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
