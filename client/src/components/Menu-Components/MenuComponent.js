import React, { useState, useContext, useEffect } from 'react'
import { useHistory, Route } from "react-router-dom";
import florLogo from "../../assets/flor-logo-topbar-menu.png";
import Modal from "../Mapview/Modal";
import Exchange from "./MenuExchange";
import Library from "./MenuLibrary";
import MenuFirst from "./MenuFirst";
import LibraryCategory from "./LibraryCategory";
import ExchangeGot from "./ExchangeGot";
import ExchangeNeed from "./ExchangeNeed";
import LibraryItem from "./LibraryItem";
import ExchangeItem from "./ExchangeItem";
import ExchangeNeedAllCategories from "./ExchangeNeedAllCategories";
import ExchangeNeedCategory from "./ExchangeCategory";
import { SettingContext } from "../../contexts/SettingContext";
import { DocumentContext } from "../../contexts/DocumentContext";
import { BarterContext } from "../../contexts/BarterContext";
import { LocationContext } from "../../contexts/LocationContext";

import spinner from "../../assets/spinner.svg"
import ExchangeMenuGot from './ExchangeMenuGot';
function MenuComponent() {

  const history = useHistory();

  const [loading, setloading] = useState(true)
  const { toggleModal, setMessage, setmodalType } = useContext(SettingContext);

  const { modal } = useContext(SettingContext);
  const { documents, documentStatus } = useContext(DocumentContext);
  const { barters, barterStatus } = useContext(BarterContext);
  const { locations, locationsStatus } = useContext(LocationContext);

  useEffect(() => {
    if (barterStatus === "success" && documentStatus === "success" && locationsStatus === "success") {
      if (documents !== undefined && barters !== undefined && locations !== undefined) {
        setloading(false);
        console.log(documents)
      }
    }
  }, [documents, barters, locations, modal, barterStatus, documentStatus, locationsStatus])

  function goBack() {
    history.goBack();
  }

  return (
    <div>
      {loading ?
        <div className="component-menu-spinner">
          <img src={spinner} alt="" />
          <h3>Cargando...</h3>
        </div>
        :
        <div className="component-menu">
          <Modal />
          <div className="top-bar-menu-component">
            <div onClick={goBack.bind()} class="arrow-icon">
              <div class="arrow" />
            </div>
            <h3>Sembrando Vida</h3>
            <div className="top-bar-menu-button-menu" onClick={() => { setMessage(5); toggleModal(); setmodalType(0) }} />

          </div>

          <div className="component-menu-content">

            <Route path="/menu/exchange/got/:userID">
              <ExchangeGot />
            </Route>
            <Route path="/menu/exchange/need/user/:userID">
              <ExchangeNeed />
            </Route>
            <Route path="/menu/exchange/categories/:category/:type">
              <ExchangeNeedCategory products={barters} userInfo={locations} />
            </Route>
            <Route exact strict path="/menu/exchange/got">
              <ExchangeMenuGot />
            </Route>
            <Route exact strict path="/menu/exchange/need">
              <ExchangeNeedAllCategories products={barters} userInfo={locations} />
            </Route>
            <Route strict exact path="/menu/exchange">
              <Exchange />
            </Route>
            <Route path="/menu/library/:category">
              <LibraryCategory documents={documents} userInfo={locations} />
            </Route>
            <Route strict exact path="/menu/doc/:id">
              <LibraryItem documents={documents} userInfo={locations} />
            </Route>
            <Route strict exact path="/menu/item/:id">
              <ExchangeItem barters={barters} userInfo={locations} />
            </Route>
            <Route strict exact path="/menu/library">
              <Library documents={documents} userInfo={locations} />
            </Route>
            <Route strict exact path="/menu">
              <MenuFirst />
            </Route>
            <div className="illustrations-menufirst">
              <img src={florLogo} alt="logoFlor" />
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default MenuComponent