import chaussure from '../assets/images/chaussure.jpg';
import chaussures from '../assets/images/chaussures.jpg';

export default function Carousel(){
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0"
                className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={chaussure} className="d-block w-100" alt="Chaussure du magasin" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Promotion jusqu'à -50%</h1>
              <p className="opacity-75">Votre première paire achetée à -25% et la deuxième à -50% !</p>
              <p><a className="btn btn-lg btn-primary" href="#">Inscrivez-vous</a></p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={chaussures} className="d-block w-100" alt="Chaussure du magasin" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Promotion jusqu'à -50%</h1>
              <p>Votre première paire achetée à -25% et la deuxième à -50% !</p>
              <p><a className="btn btn-lg btn-primary" href="#">Inscrivez-vous</a></p>
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
