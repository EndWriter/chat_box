import chaussure1 from '../assets/images/chaussure1.jpg';
import chaussure2 from '../assets/images/chaussure2.jpg';

export default function Carousel(){
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={chaussure1} className="d-block w-100" alt="Chaussure du magasin" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Promotion jusqu'à -50%</h1>
              <p>Votre première paire achetée à -25% et la deuxième à -50% !</p>
              <p><a className="btn btn-lg btn-primary" href="/user">Inscrivez-vous</a></p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={chaussure2} className="d-block w-100" alt="Chaussure du magasin" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Promotion jusqu'à -50%</h1>
              <p>Votre première paire achetée à -25% et la deuxième à -50% !</p>
              <p><a className="btn btn-lg btn-primary" href="/user">Inscrivez-vous</a></p>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
