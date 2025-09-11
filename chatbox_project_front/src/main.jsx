import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header.jsx'
import Footer from './footers.jsx'
import Carousel from './carousel.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/carousel.css'
import './assets/css/custom.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Carousel />
    <Footer />
  </StrictMode>,
)
