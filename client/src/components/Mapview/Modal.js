import React, { useContext, useEffect } from 'react'
import { SettingContext } from "../../contexts/SettingContext";

function Modal() {

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
         <div className="menu-modal-option">Menu Principal</div>
         <div className="menu-modal-option">Intercambios</div>
         <div className="menu-modal-option">Biblioteca</div>
         <div className="menu-modal-option" style={{ borderBottom: "none" }}>Documentos</div>
        </div>
       )
      case 1:
       return (
        <div className="menu-modal-container">
         <div className="menu-modal-option" onClick={() => { setmodalType(1); setMessage(3); }}>Contactar</div>
         <div className="menu-modal-option">Acerca de Mi</div>
         <div className="menu-modal-option">Intercambios</div>
         <div className="menu-modal-option" style={{ borderBottom: "none" }}>Documentos</div>
        </div>
       )
      case 3:
       return (
        <div >
         <h2>Se enviará este contacto</h2>
         <h4>¿Desear Continuar?</h4>
         <div className="modal-buttons">
          <div className="modal-button-green" onClick={toggleModal}>Sí</div>
          <div className="modal-button-red" onClick={toggleModal}>No</div>
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
  </div>

 )
}

export default Modal
