import React  from 'react'
import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Gallery from './Pages/Gallery.jsx'
import News from './Pages/News.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Services /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/news", element: <News /> },
      { path: "/contactus", element: <ContactUs /> },
    ]
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App