import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../components/Header.jsx'
import Footer from '../components/Footers.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/style.css'

export default function NotFound(){
  return(
    <>
      <Header/>
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <h1>404 - Page non trouvée</h1>
            <p>La page que vous cherchez n'existe pas.</p>
        </div>
      <Footer />
    </>
  );
}