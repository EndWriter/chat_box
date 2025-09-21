import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../components/Header.jsx'
import Footer from '../components/Footers.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/login.css'

export default function Login(){
  return(
    <>
      <Header/>
        <h2>Inscription</h2>
        <form>
            {/* <!-- Email input --> */}
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">Adresse email</label>
            </div>

            {/* <!-- Password input --> */}
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Mot de passe</label>
            </div>

            {/* <!-- Submit button --> */}
            <div class="col text-center">
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Inscription</button>
            </div>
        </form>
      <Footer />
    </>
  );
}