import Header from '../components/Header.jsx'
import Footer from '../components/Footers.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/style.css'
import '../assets/css/command.css'

export default function Command(){
  return(
    <>
      <Header/>
      <h2>Mes commandes</h2>
      <Footer />
    </>
  );
}