import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header.jsx'
import Footer from './footers.jsx'
import Carousel from './carousel.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/App.css'
import './assets/css/index.css'
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
