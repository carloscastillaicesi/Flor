import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { SettingContext } from "../../contexts/SettingContext";


export default function Peek({ name, pic, id }) {

  const [dropdown, setdropdown] = useState(false)
  var localStore = JSON.parse(localStorage.getItem('state'));
  const { toggleModal, setMessage, setmodalType, setContactId } = useContext(SettingContext);
  function dropdownToggle() {
    setdropdown(!dropdown);
  }
  return (
    <div className="peek">
      <div className={!dropdown ? "mihuerta-container" : "mihuerta-container-expanded"}>

        <div className="mihuerta-container-item" onClick={!dropdown ? () => { dropdownToggle() } : () => { dropdownToggle() }}>
          <img src={pic} alt="" />
          <h2>{name.split(" ").length >= 4 ? name.split(" ").slice(0, 3).join(" ") : name}</h2>
          <div className={!dropdown ? "arrow-gallery down" : "arrow-gallery up"} />
        </div>

        <div className="mihuerta-button-container">

          {localStore._id !== id &&
            <div
              onClick={() => { setContactId(id); setMessage(1); toggleModal(); setmodalType(0) }}><div className="mihuerta-button">
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7a5 5 0 01-1-3l1-1-2-3-3 1v1c0 1 1 4 4 7 2 2 5 3 7 3l1-3-2-2H9L8 8C7 9 6 8 5 7z" fill="#fff" /></svg>
                <h5>Contactar</h5></div>
            </div>}

          <Link
            to={{ pathname: "/map/aboutme/userinfo" }}> <div onClick={() => { dropdownToggle() }}><div className="mihuerta-button"><div className="plus" />
              <svg width="10" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6l2-1 1-2-1-2-2-1-2 1-1 2 1 2 2 1zm5 3a7 7 0 000-1L9 7V6a2 2 0 00-1 0H7a63 63 0 01-1 1 3 3 0 01-2 0V6a67 67 0 01-1 0H2a2 2 0 00-1 0v1L0 8a6 6 0 000 1v1l1 1 1 1h6l2-1V9z" fill="#fff" /></svg>
              <h5>{localStore._id !== id ? "Ver Perfil" : "Entrar a mi Perfil"}</h5> </div></div></Link>
        </div>
      </div>

    </div>
  )
}
