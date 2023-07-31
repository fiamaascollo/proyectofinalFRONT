import amarok from "../img/amarok.jpg";
import interior from "../img/interior.jpg";
import tcross from "../img/tcross.jpg";
import golf from "../img/golf.jpg";
import img1 from "../img/img1.jpeg"
import img2 from "../img/img2.jpg"
import img3 from "../img/img3.jpg"
import img4 from "../img/img4.avif"
import Chatbot from "./Chatbot";
import "../css/index.css";

const Home = () => {
    return (
            <>
            <Chatbot />
               <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                      <img src={amarok} class="d-block w-100" alt="VW Amarok"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                      <img src={interior} class="d-block w-100" alt="VW"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                      <img src={tcross} class="d-block w-100" alt="VW T-Cross"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                      <img src={golf} class="d-block w-100" alt="VW Golf"/>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

                <hr class="featurette-divider"/>


                <div>
                  <br />
                  <h1 className="centrar">El mundo <bold>Volkswagen</bold> está pensado para <bold>vos.</bold></h1>
                  <br/>
                </div>

                    <div class="row featurette" className="box2">
                      <div class="col-md-7" className="flex-item2">
                        <h2 class="featurette-heading fw-normal lh-1">Hay una manera más fácil de subirte a tu 0km <span class="text-body-secondary"> | Volkswagen Financial Services</span></h2>
                        <p class="lead">Ya elegiste un Volkswagen, ahora elegí la mejor financiación. <br/> Nueva Web. Más Simple. Más moderna. <br/> Volkswagen Financial Services.</p>
                      </div>
                      <div class="col-md-5">
                        <img src={img4} className="imagen" width="650" height="450"/>
                      </div>
                    </div>

                    <hr class="featurette-divider"/>

                    <div class="row featurette" className="box">
                      <div class="col-md-7" className="flex-item">
                        <h2 class="featurette-heading fw-normal lh-1">Extensión de la garantía, <span class="text-body-secondary">tranquilidad para vos y tu Volkswagen.</span></h2>
                        <p class="lead">Volkswagen Argentina S.A. informa que en virtud de la Resolución 244/2020 de la Secretaría de Comercio Interior se estableció que los plazos previstos en las garantías contractuales y legales en los términos de la Ley N° 24.240 se tienen por suspendidos por todo el periodo en que las y los consumidores se hayan visto imposibilitados de ejercer sus derechos en virtud del Aislamiento Social, Preventivo y Obligatorio dictado por el Decreto N° 297 de fecha 19 de marzo de 2020 y sus modificatorios.</p>
                      </div>
                      <div class="col-md-5">
                        <img src={img1} className="imagen" width="580" height="500"/>
                      </div>
                    </div>

                    <hr class="featurette-divider"/>

                    <div class="row featurette" className="box2">
                      <div class="col-md-7" className="flex-item2">
                        <h2 class="featurette-heading fw-normal lh-1">Existe el mejor cuidado para tu Volkswagen <span class="text-body-secondary"> | Postventa</span></h2>
                        <p class="lead">Nos aseguramos de que tu Volkswagen esté siempre en condiciones con nuestros servicios de Postventa Volkswagen, para que puedas seguir tu camino de la mejor manera.</p>
                      </div>
                      <div class="col-md-5">
                        <img src={img2} className="imagen" width="650" height="450"/>
                      </div>
                    </div>

                    <hr class="featurette-divider"/>

                    <div class="row featurette" className="box">
                      <div class="col-md-7" className="flex-item">
                        <h2 class="featurette-heading fw-normal lh-1">Innovación y tecnología.<br /> <span class="text-body-secondary">Conocé la última tecnología Volkswagen pensada para vos.</span></h2>
                        <p class="lead">Tu Volkswagen ahora es más que sólo un auto. Conectate  y descubrí un mundo de posibilidades con la nueva tecnología pensada para que cada viaje sea más fácil, seguro y entretenido.</p>
                      </div>
                      <div class="col-md-5">
                        <img src={img3} className="imagen" width="550" height="400"/>
                      </div>
                    </div>


                <hr class="featurette-divider"/>
            </>



        
    )
}

export default Home;