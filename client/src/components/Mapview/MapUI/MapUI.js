import React, { useContext } from 'react'
import Modal from "../Modal";
import geolocation from "../../../assets/geolocation2.svg";
import allusersicon from "../../../assets/allusersicon.svg";
import terrain from "../../../assets/terrain.svg";
import street from "../../../assets/street.svg";
import fullscreeni from "../../../assets/fullscreen.svg";
import normalscreen from "../../../assets/normalscreen.svg";
import { SettingContext } from "../../../contexts/SettingContext";

export default function MapUI({ name, id, pic, fullScreenMode, mapUrl, changeMap, handle, toggleFullscreen, centerMapViewMe, allUsersToggle, setpickedUser }) {
 const { toggleModal, setMessage, setmodalType } = useContext(SettingContext);
 return (
  <div>
   <div className="top-bar">
    <div >
     <img src={pic} alt="" />
     <h3>Hola, {name.split(" ").length >= 4 ? name.includes("del") ? name.split(" ").slice(0, 3).join(" ") : name.split(" ").slice(0, 2).join(" ") : name.split(" ")[0]}</h3>
    </div>
    <div className="button-menu" onClick={() => { setMessage(7); toggleModal(); setmodalType(1) }} />

   </div>
   <Modal id={id} />
   <div className="button-group">
    <div className="button-rise-white" onClick={changeMap.bind(this)}><img src={!mapUrl ? terrain : street} alt="" /></div>
    <div className="button-rise-white" onClick={fullScreenMode === "false" ? () => {
     toggleFullscreen("true");
     handle.enter();
    } : () => {
     toggleFullscreen("false");
     handle.exit();
    }}><img src={fullScreenMode === "true" ? fullscreeni : normalscreen} alt="" /></div>
    <div className="button-rise" onClick={() => { allUsersToggle(this); setpickedUser(''); }}><img src={allusersicon} alt="" /><div class="icon-bar-person" /></div>
    <div className="button-rise" onClick={centerMapViewMe.bind(this)}><img src={geolocation} alt="" /></div>
   </div>
  </div>
 )
}

