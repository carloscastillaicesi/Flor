import React, { useState } from 'react'
import onboarding1 from "../assets/onboarding1.png"
import onboarding2 from "../assets/onboarding2.png"
import onboarding3 from "../assets/onboarding3.png"
import onboarding4 from "../assets/onboarding4.png"
import onboarding5 from "../assets/onboarding5.png"
import onboarding6 from "../assets/onboarding6.png"
import { useHistory } from "react-router-dom";
function Onboarding({ getGeo, setCurrentUserLocalStorage, name }) {
  const history = useHistory();
  const [step, setstep] = useState(0)
  const [stepAnimation, setstepAnimation] = useState(0)

  function nextStep(num) {
    setstepAnimation(num)
    setTimeout(() => {
      setstep(num)
    }, 1000);

  }

  return (
    <div>
      {(() => {
        switch (step) {
          case 0:
            return (
              <div className="homeuser-container">
                <div className={stepAnimation === 0 ? "onboarding-container" : "onboarding-container-out"}>
                  <img src={onboarding1} alt="" />
                  <div className="onboarding-container-text">
                    <h1>{`¡Hola, ${name.split(" ").length >= 4 ? name.split(" ").slice(0, 3).join(" ") : name.split(" ")[0]}!`}</h1>
                    <h5>Soy una asistente virtual para la gestión de información del proceso comunitario de la red huertas caseras urbanas y rurales <strong>Sembrando Vida</strong> en el municipio de Cali</h5>
                  </div>
                  <div className="onboarding-container-button"><h3>1/5</h3> <div className="button-onboarding" onClick={() => nextStep(1)}> Siguiente</div></div>

                </div>
              </div>
            )
          case 1:
            return (
              <div className="homeuser-container">
                <div className={stepAnimation === 1 ? "onboarding-container" : "onboarding-container-out"}>
                  <img src={onboarding2} alt="" />
                  <div className="onboarding-container-text">
                    <h1>Una asistente en WhatsApp</h1>
                    <h5>Como ya sabes, soy una asistente inteligente con quien te puedes comunicar por medio de mi número WhatsApp. Yo seré la encargada de darte los links de acceso a esta plataforma en la que estamos actualmente</h5>
                  </div>

                  <div className="onboarding-container-button">
                    <h3>2/5</h3>
                    <div className="button-onboarding" onClick={() => nextStep(2)}> Siguiente</div>
                  </div>

                </div>
              </div>
            )
          case 2:
            return (
              <div className="homeuser-container">
                <div className={stepAnimation === 2 ? "onboarding-container" : "onboarding-container-out"}>
                  <img src={onboarding3} alt="" />
                  <div className="onboarding-container-text">
                    <h1>Registro</h1>
                    <h5> <strong>¡Estamos a pocos pasos de entrar al mapa de Sembrando Vida! </strong>
                      <br />
                      <br />
           Acabo de sembrar tu semilla de información, asi que ahora puedo referenciarte en el mapa de Cali para que otros Sembrandores de Vida puedan ver tu perfil.
          <br />
                      <br />
          Tu semilla pasará por cuatro etapas y a medida de que seguimos con el registro de tu información tu semilla crecerá para convertise una hermosa flor.  </h5>
                  </div>

                  <div className="onboarding-container-button"><h3>3/5</h3> <div className="button-onboarding" onClick={() => nextStep(3)}> Siguiente</div></div>

                </div>
              </div>
            )
          case 3:
            return (
              <div className="homeuser-container">
                <div className={stepAnimation === 3 ? "onboarding-container" : "onboarding-container-out"}>
                  <img src={onboarding4} alt="" />
                  <div className="onboarding-container-text">
                    <h1>Intercambio</h1>
                    <h5>Tanto por medio del chat de Flor como en esta plataforma, puedes encontrar la sección de intercambios dividida, en "Tengos" y "Necesitos". Podrás encontrar tanto tus registros como los de los demás</h5>
                  </div>

                  <div className="onboarding-container-button"><h3>4/5</h3> <div className="button-onboarding" onClick={() => nextStep(4)}> Siguiente</div></div>

                </div>
              </div>
            )
          case 4:
            return (
              <div className="homeuser-container">
                <div className={stepAnimation === 4 ? "onboarding-container" : "onboarding-container-out"}>
                  <img src={onboarding5} alt="" />
                  <div className="onboarding-container-text">
                    <h1>Biblioteca Virtual</h1>
                    <h5>Con Flor pueden tanto subir documentos relacionados a agricultura Urbana a través de Whatsapp, para guardarlos en esta plataforma. También podrás encontrar documentos que otros Sembradores de Vida compartan</h5>
                  </div>

                  <div className="onboarding-container-button"><h3>5/5</h3> <div className="button-onboarding" onClick={() => nextStep(5)}> Siguiente</div></div>

                </div>
              </div>
            )
          case 5:
            return (
              <div className="homeuser-container">
                <div className={stepAnimation === 5 ? "onboarding-container" : "onboarding-container-out"}>
                  <img src={onboarding6} alt="" />
                  <div>
                    <br />
                    <h1>{`¡Listo, ${name.split(" ").length >= 4 ? name.split(" ").slice(0, 3).join(" ") : name.split(" ")[0]}!`}</h1>

                    <br />
                    <h5>Ya puedes ingresar al mapa para que puedas revisar tu semillita de información y conocer más de otros sembradores de vida</h5>


                    <br />
                    <h5><strong>Para poder ingresar al mapa, necesito me permitas conocer tu ubicación</strong></h5>
                    <div onClick={() => {
                      getGeo(); setCurrentUserLocalStorage(); setTimeout(() => {
                        history.push("/map")
                      }, 1000);
                    }} className="option-button">Activar Geolocalización</div>
                  </div>

                </div>
              </div>
            )
          default:
            return (
              <div>You are a User.</div>
            )
        }

      })()}
    </div>
  )
}

export default Onboarding
