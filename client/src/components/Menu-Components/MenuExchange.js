import React from 'react'
import { Link } from "react-router-dom";

function MenuExchange() {
  return (
    <div className="component-menuexchange">
      <div className="component-exchange-text">
        <h2>Intercambios</h2>
        <h6>Truequea lo que necesites con otros sembradores de vida </h6>
      </div>
      <div className="menuexchange-options">
        <Link to="exchange/got">
          <div className="menuexchange-single-option">
            <div className="menuexchange-single-option-text">
              <h3>Mis Registros </h3>
              <h6>Mira y gestiona tus registros para  que  otros sembradores de vida te puedan ayudar </h6>
            </div>
            <div class="arrow-menuexchange right" /></div>
        </Link>

        <Link to="exchange/need">
          <div className="menuexchange-single-option menuexchange-yellow">
            <div className="menuexchange-single-option-text">
              <h3>Intercambios en la Red</h3>
              <h6>Mira los registros y anuncios que otros sembradores de vida han hecho</h6>
            </div>
            <div class="arrow-menuexchange arrow-menuexchange-yellow right" /></div>
        </Link>

      </div>
    </div>
  )
}

export default MenuExchange
