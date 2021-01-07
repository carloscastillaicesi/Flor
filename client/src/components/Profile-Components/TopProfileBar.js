import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { SettingContext } from "../../contexts/SettingContext";


function TopProfileBar({ setOpen, setPage, name }) {
  const history = useHistory();
  let location = useLocation();
  const { toggleModal, setMessage, setmodalType } = useContext(SettingContext);

  function goBack() {

    if (location.pathname === '/map/aboutme/userinfo') {
      setOpen(true);
      setPage(true);
      history.push("/map");
      console.log("Cerró")
    } else {
      history.goBack();
    }

  }

  return (
    <div className="top-bar-component">
      <div onClick={goBack.bind()} class="arrow-icon">
        <div class="arrow" />
      </div>
      <h3>{`La huerta de ${name.split(" ").length >= 4 ? name.includes("del") ? name.split(" ").slice(0, 3).join(" ") : name.split(" ").slice(0, 2).join(" ") : name.split(" ")[0]}`}</h3>
      <div className="button-menu" onClick={() => { setMessage(1); toggleModal(); setmodalType(0) }} />
    </div>
  )
};

export default TopProfileBar
