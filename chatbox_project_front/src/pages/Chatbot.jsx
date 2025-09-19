import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../components/Header.jsx'
import Footer from '../components/Footers.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/App.css'
import '../assets/css/index.css'
import '../assets/css/style.css'


export default function Chatbot() {
  return (
  <StrictMode>
    <Header/>
    <Footer />
  </StrictMode>
  );
}