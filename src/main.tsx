import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from './componentes/header/Header.tsx';
import Main from './componentes/main/Main.tsx';
import Contato from './componentes/contato/Contato.tsx';
import Footer from './componentes/footer/Footer.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <> 
    <Header/>
    <Main/>
    <Footer/>
    </>,
  },
  {
    path: "/noticias",
    element: <div>Pagina de noticias</div>,
  },
  {
    path: "/sobre",
    element: <div>Pagina Sobre</div>,
  },
  {
    path: "/contato",
    element: <> 
    <Header/>
    <Contato/>
    <Footer/>
    </>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)