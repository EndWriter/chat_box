import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../components/Header.jsx'
import Footer from '../components/Footers.jsx'
import Carousel from '../components/carousel.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/App.css'
import '../assets/css/index.css'
import '../assets/css/style.css'
import '../assets/css/carousel.css'
import '../assets/css/custom.css'

export default function Home(){
  return(
    <StrictMode>
    <Header/>
    <Carousel />
    <Footer />
  </StrictMode>
  );
}