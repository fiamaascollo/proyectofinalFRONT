import "../css/Concesionarios.css"
import Chatbot from "./Chatbot";

const Concesionarios = () => {
    return (
            <>
            <Chatbot />
            <h1 className="centrar"> <bold> ¡Volkswagen te está esperando! </bold> </h1>
            <h2 className="centrar">Acercate a nuestro punto de venta más cercano para recibir un asesoramiento personalizado.</h2>
            <hr />
            <br />
            <div className="mapas centrar">
                <div>
                    <h3>Concesionario - Ciudad</h3>
                    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13401.242592491495!2d-68.831047!3d-32.889954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e092333946455%3A0x9b6a1386fd83431e!2sVolkswagen%20Goldstein!5e0!3m2!1ses-419!2sar!4v1689295171697!5m2!1ses-419!2sar"/>
                </div>
                <div>
                    <h3>Concesionario - Godoy Cruz</h3>
                    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13395.320373328263!2d-68.850324!3d-32.929087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0bd729e13db5%3A0xe16f61d21e3d449b!2sYacopini%20S%C3%BCd%20-%20Concesionario%20Oficial%20Volkswagen!5e0!3m2!1ses-419!2sar!4v1689295235917!5m2!1ses-419!2sar"/>
                </div>
                <div>
                    <h3>Concesionario de Camiones - Godoy Cruz </h3>
                    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.4997841622517!2d-68.83023152440265!3d-32.93781187359689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0ea4f98a8d2f%3A0x69200b5a4403acda!2sVesten!5e0!3m2!1ses-419!2sar!4v1689297979020!5m2!1ses-419!2sar"/>
                </div>
            </div>

            <div className="mapas centrar">
                <div>
                    <h3>Sucursal Postventa - Ciudad</h3>
                    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13401.665790285826!2d-68.831003!3d-32.887156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09232e884c13%3A0x57d3b1f4a9cfd815!2sVolkswagen%20Goldstein%20Postventa!5e0!3m2!1ses-419!2sar!4v1689295225477!5m2!1ses-419!2sar"/>
                </div>
                <div>
                    <h3>Tienda Oficial de Repuestos - Godoy Cruz </h3>
                    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13401.37085595595!2d-68.826744!3d-32.889106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09cb89d87e1d%3A0x1a873f41e3eccf85!2sREPUESTOS%20Universo%20Volkswagen!5e0!3m2!1ses-419!2sar!4v1689295257350!5m2!1ses-419!2sar"/>
                </div>
            </div>
            </>

    )
}

export default Concesionarios; 