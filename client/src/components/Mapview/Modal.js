import React, { useContext, useEffect } from 'react'
import { SettingContext } from "../../contexts/SettingContext";
import { Link } from "react-router-dom";
function Modal({ name, id }) {

  const { modal, toggleModal, modalMessage, modalType, setMessage, setmodalType } = useContext(SettingContext);

  useEffect(() => {

  }, [modal, modalMessage, modalType])

  return (
    <div className={modal ? modalType === 0 ? "modal" : "modal-center" : modalType === 0 ? "modal-close" : "modal-center-close"} onClick={toggleModal}>
      <div className={modal ? "modal-content" : "modal-content-close"} style={{ width: modalType === 0 ? modalMessage === 0 ? "330px" : "200px" : "", margin: modalType === 0 ? modalMessage === 0 ? "80px auto" : "10px 0px 0px 110px" : "" }} onClick={(e) => e.stopPropagation()} >
        {(() => {
          switch (modalMessage) {
            case 0:
              return (
                <div className="menu-modal-container">
                  <Link to="/menu">  <div className="menu-modal-option" onClick={toggleModal} onClick={toggleModal}><h5>Menu Principal</h5>  <div className="arrow-gallery right" /></div>
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
                  <div className="menu-modal-option" onClick={() => { setmodalType(1); setMessage(3); }}>Contactar<div className="arrow-gallery right" /></div>
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
                    <div className="modal-button-green" onClick={toggleModal}>Sí</div>
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
