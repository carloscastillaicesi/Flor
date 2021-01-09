import React, { useContext, useEffect } from 'react'
import { SettingContext } from "../../contexts/SettingContext";


import { Link } from "react-router-dom";
function Modal({ id }) {

  var localStore = JSON.parse(localStorage.getItem('state'));
  const { modal, toggleModal, modalMessage, modalType, setMessage, setmodalType, contactId } = useContext(SettingContext);



  const sendNumber = async (part) => {
    console.log(`/sendcontact/${localStore._id}-${part}`)
    const res = await fetch(`/sendcontact/${localStore._id}-${part}`, {
      crossDomain: true
    })
    const data = await res.json();
    return data;

  }


  useEffect(() => {

  }, [modal, modalMessage, modalType])

  function widthSwitch(modalMessage) {
    switch (modalMessage) {
      case 0:
        return "330px";
      case 1:
        return "200px";
      case 5:
        return "330px";
      default:
        return ""

    }
  }

  function marginSwitch(modalMessage) {
    switch (modalMessage) {
      case 0:
        return "80px auto";
      case 1:
        return "10px 0px 0px 110px";
      case 5:
        return "10px 10px 0px auto";
      default:
        return ""

    }
  }

  function dimmer(time) {

    setTimeout(() => {

      toggleModal()

    }, time);

  }

  function sendContact() {
    if (contactId) {
      sendNumber(contactId);
    }

  }

  return (
    <div className={modal ? modalType === 0 ? "modal" : "modal-center" : modalType === 0 ? "modal-close" : "modal-center-close"} onClick={toggleModal}>
      <div className={modal ? "modal-content" : "modal-content-close"} style={{ width: widthSwitch(modalMessage), margin: marginSwitch(modalMessage) }} onClick={(e) => e.stopPropagation()} >
        {(() => {
          switch (modalMessage) {
            case 0:
              return (
                <div className="menu-modal-container">
                  <Link to="/menu">  <div className="menu-modal-option" onClick={toggleModal}><h5>Menu Principal</h5>  <div className="arrow-gallery right" /></div>
                  </Link><Link to="/menu/exchange" >  <div className="menu-modal-option" onClick={toggleModal}><h5>Intercambios</h5> <div className="arrow-gallery right" /></div>
                  </Link>
                  <Link to="/menu/library" >  <div className="menu-modal-option" onClick={toggleModal}><h5>Biblioteca Virtual</h5> <div className="arrow-gallery right" /></div>
                  </Link> <Link to={`/map/${id}`} >  <div className="menu-modal-option" onClick={toggleModal} ><h5>Mi Huerta</h5> <div className="arrow-gallery right" /></div>
                  </Link>
                  <div className="menu-modal-option" onClick={() => { setmodalType(1); setMessage(4); }} style={{ borderBottom: "none" }}><h5>Conoce más sobre Sembrando Vida</h5> <div className="arrow-gallery right" /></div>
                </div>
              )
            case 1:
              return (
                <div className="menu-modal-container">
                  {localStore._id !== id &&
                    <div className="menu-modal-option" onClick={() => { setmodalType(1); setMessage(3); }}>Contactar<div className="arrow-gallery right" /></div>
                  }
                  <Link to="/map/aboutme/detail"><div className="menu-modal-option">Acerca de Mi<div className="arrow-gallery right" /></div></Link>
                  <Link to="/map/aboutme/exchange"><div className="menu-modal-option">Intercambios<div className="arrow-gallery right" /></div></Link>
                  <Link to="/map/aboutme/documents"><div className="menu-modal-option" style={{ borderBottom: "none" }}>Documentos<div className="arrow-gallery right" /></div></Link>
                </div>
              )
            case 3:
              return (
                <div >
                  <h2>Contactar</h2>
                  <h4>Se enviará el número de este usuario a tu WhatsApp para que le puedas hablar </h4>
                  <h5><strong>¿Deseas Recibirlo?</strong></h5>
                  <div className="modal-buttons">
                    <div className="modal-button-green" onClick={() => { sendContact(); setMessage(6); dimmer(10000); }} >Sí</div>
                    <div className="modal-button-red" onClick={toggleModal}>No</div>
                  </div>
                </div>
              )
            case 4:
              return (
                <div >
                  <h2>En construcción...</h2>
                </div>
              )
            case 5:
              return (
                <div className="menu-modal-container">
                  <Link to="/map">  <div className="menu-modal-option" onClick={toggleModal}><h5>Ir al Mapa</h5>  <div className="arrow-gallery right" /></div>
                  </Link><Link to="/menu/exchange" >  <div className="menu-modal-option" onClick={toggleModal}><h5>Intercambios</h5> <div className="arrow-gallery right" /></div>
                  </Link>
                  <Link to="/menu/library" >  <div className="menu-modal-option" onClick={toggleModal}><h5>Biblioteca Virtual</h5> <div className="arrow-gallery right" /></div>
                  </Link> <Link to={`/map/${id}`} >  <div className="menu-modal-option" onClick={toggleModal} ><h5>Mi Huerta</h5> <div className="arrow-gallery right" /></div>
                  </Link>
                  <div className="menu-modal-option" onClick={() => { setmodalType(1); setMessage(4); }} style={{ borderBottom: "none" }}><h5>Conoce más sobre Sembrando Vida</h5> <div className="arrow-gallery right" /></div>
                </div>
              )
            case 6:
              return (
                <div className="menu-modal-container">
                  <h2>{`Ya envie el contacto a tu WhatsApp`}</h2>
                  <h4>Espero te sea de ayuda, recuerda decirle que haces parte de la red de Sembrando Vida</h4>
                  <hr />
                  <h5><strong>*Si no has hablado con flor en las últimas 24 horas no será posible enviarte este contacto.</strong></h5>
                  <hr />
                  <h6>{`Este mensaje desaparecerá automaticamente en 10 segundos`}</h6>
                </div>
              )
            case 7:
              return (
                <div >
                  <h3>Este menú se encuentra temporalmente deshabilitado debido a que hay una prueba de usuario que actualmente esta activa.</h3>
                  <hr />
                  <h5>*Si tienes alguna duda, comunícate con el grupo de soporte para pruebas de usuario</h5>
                </div>
              )
            case 8:
              return (
                <div className="menu-modal-container">
                  {localStore._id !== id &&
                    <div className="menu-modal-option" onClick={() => { setmodalType(1); setMessage(3); }}>Contactar<div className="arrow-gallery right" /></div>
                  }
                  <Link to="/map/aboutme/detail"><div className="menu-modal-option">Acerca de Mi<div className="arrow-gallery right" /></div></Link>

                  <div className="menu-modal-option" style={{ textDecoration: "  line-through" }}>Intercambios<div className="arrow-gallery right" /></div>

                  <div className="menu-modal-option" style={{ borderBottom: "none", textDecoration: "  line-through" }}>Documentos<div className="arrow-gallery right" /></div>
                </div>
              )
            default:
              return (
                <div>You are a User.</div>
              )
          }

        })()}

      </div>
    </div>

  )
}

export default Modal
