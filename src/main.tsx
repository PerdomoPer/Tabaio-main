import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Footer from './componentes/footer/Footer'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element:<>
              <Header/>
              <Main/>
              <Footer/>
            </>,
  },
  {
    path: "/noticias",
    element: <div>Página de Notícias!</div>,
  },
  {
    path: "/sobre",
    element: <div>Página Sobre!</div>,
  },
  {
    path: "/contato",
    element: <div>Página de Contato!</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)