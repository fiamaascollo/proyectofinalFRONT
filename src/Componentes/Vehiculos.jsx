import "../css/Vehiculos.css"
import Chatbot from "./Chatbot"
import golf from "../img/golf2.jpg"
import amarok from "../img/amarok2.jpg"
import gol from "../img/gol.jpg"
import nivus from "../img/nivus.png"
import polo from "../img/polo.jpg"
import taos from "../img/taos.png"
import tcross from "../img/tcross2.jpg"
import virtus from "../img/virtus.jpg"
import tiguan from "../img/tiguan.jpeg"
import { Link } from 'semantic-ui-react';

const Vehiculos = () => {
    return (
        <>
        <Chatbot />
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Encontrá tu próximo Volkswagen.</h1>
                <p class="lead text-body-secondary parrafo">Conocé los mejores precios, ofertas y planes de pago que te acercan cada vez más a tu propio Volkswagen.</p>
                <Link to="/contacto">
                    <button className="btn btn-primary my-2">Quiero más info</button>
                </Link>
            </div>
            </div>
        </section>

        <div class="album py-2 bg-body-tertiary"/>
            <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={golf} alt="" />
                            <div className="titulo">
                                <h3>VW GOLF</h3>
                            </div>
                            <div class="card-body">
                                <p class="card-text parrafo">Súbete al Golf 8 y experimenta una conducción que te saca de la vida cotidiana y te lleva a un mundo menos común, el ganador de Drive Car of the Year 2023 Best Small Car, con conducción semiautónoma, rendimiento incomparable y diseño llamativo.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={amarok} alt="" />
                            <div className="titulo">
                                <h3>VW AMAROK</h3>
                            </div>
                            <div class="card-body">
                                <p class="card-text parrafo">Ya sea en ripio, en asfalto, en arena, barro o nieve, Amarok tiene para ofrecerte más potencia que nunca, con una estabilidad dinámica que la distingue del resto y una tecnología lista para ser tu soporte ideal en todas las condiciones.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={gol} alt="" />
                            <div className="titulo">
                                <h3>VW GOL</h3>
                            </div>
                            <div class="card-body">
                                <p class="card-text parrafo">El Gol Trend nació para aquellos clientes que quieren algo más en relación con el diseño, el equipamiento, la calidad de los materiales y el desempeño. Este restyling refuerza estos conceptos con nuevos argumentos estilísticos y tecnológicos.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={nivus} alt="" />
                            <div className="titulo">
                                <h3>VW NIVUS</h3>
                            </div>
                            <div class="card-body">
                                <p class="card-text parrafo">El integrante de la familia Volkswagen que reúne la mezcla exacta entre modernidad, potencia y tecnología. Y cada vez estás más cerca de tenerlo. VW Nivus viene con Motor TSI, VW Play y el diseño más innovador. ¿Qué estás esperando para conocerlo?</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={polo} alt="" />
                            <div className="titulo">
                                <h3>VW POLO</h3>
                            </div>
                            <div class="card-body">
                                <p class="card-text parrafo">El Polo es la combinación perfecta entre tecnología, diseño sofisticado y seguridad. El Nuevo Polo recibió la máxima calificación en seguridad del Latin NCAP, al obtener cinco estrellas tanto para la protección de ocupante adulto como la del ocupante infantil.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={taos} alt="" />
                            <div className="titulo">
                                <h3>VW TAOS</h3>
                            </div>
                            <div class="card-body">
                                <p class="card-text parrafo">Taos es el nuevo integrante de nuestra familia de SUVW y podemos decir orgullosos que lo fabricamos en Argentina para todas las familias de Latinoamérica. Taos es sinónimo de confort, seguridad, conectividad y diseño.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={tcross} alt="" />
                            <div className="titulo">
                                <h3>VW T-CROSS</h3>
                            </div>
                            <div class="card-body">
                                <p class="card-text parrafo">El T-Cross de siempre viene más recargado que nunca con la incorporación de su nuevo motor 200 TSI, aportándole una mayor eficiencia y una mejor autonomía al vehículo. Ofrece un consumo económico y una elevada potencia en toda la curva de aceleración.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={virtus} alt="" />
                            <div className="titulo">
                                <h3>VW VIRTUS</h3>
                            </div>
                            <div class="card-body">
                                <p class="card-text parrafo">El Nuevo Virtus GTS se convierte en una nueva referencia en deportividad marcando diferencia con su gran espacio interno. Su diseño imponente exclusivo trae detalles de altísima calidad en color rojo y negro sumados a las líneas cromadas en su exterior.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={tiguan} alt="" />
                            <div className="titulo">
                                <h3>VW TIGUAN</h3>
                            </div>
                            <div class="card-body">
                                <p class="card-text parrafo">El nuevo Tiguan Allspace tiene lugar para mucho más. Viví más anécdotas,​ más risas y más aventuras. Si lo tuyo es ir por todo, 4MOTION es un sistema de tracción a las cuatro ruedas con el que vas a poder superar cualquier terreno.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Vehiculos;