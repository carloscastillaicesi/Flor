import React from 'react'
import { Link } from "react-router-dom";

function ExchangeMenuGot() {

  var localStore = JSON.parse(localStorage.getItem('state'));

  return (
    <div className="component-menuexchange">
      <div className="component-exchange-text">
        <h2>Intercambios</h2>
        <h6>¿Què tengo?</h6>
      </div>
      <div className="menuexchange-options">
        <Link to={`got/${localStore._id}`}>
          <div className="menuexchange-single-option">
            <div className="menuexchange-single-option-text">
              <h3>Lo que tengo</h3>
              <h6>Mira lo que actualmente tienes para intercambiar con otros Sembradores de Vida</h6>
            </div>
            <div class="arrow-menuexchange right" /></div>
        </Link>

        <Link to={`need/user/${localStore._id}`}>
          <div className="menuexchange-single-option">
            <div className="menuexchange-single-option-text">
              <h3>Cosas que necesito </h3>
              <h6>Mira los registros de lo que actualmente necesitas</h6>
            </div>
            <div class="arrow-menuexchange right" />
          </div>
        </Link>

      </div>
      <a href="http://wa.link/y15frm" target="_blank" rel="noopener noreferrer"><div className="option-button"><h4>Registar algo nuevo</h4></div></a>
    </div>
  )
}

export default ExchangeMenuGot
