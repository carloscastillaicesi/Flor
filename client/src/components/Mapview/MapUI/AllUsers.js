import React from 'react'
import defaultPic from "../../../assets/defaultphotouser.png"
import sembrando from "../../../assets/sembranovidalogo.png";

export default function AllUsers({ allUsersToggle, name, pic, data, pickedUser, setpickedUser, centerMapViewUser, setOpen, setOptions, geometry }) {
 return (

  <div className="all-users" >
   <div className="all-users-map-scape-area"
    onClick={() => { setOpen(true); setOptions("map") }}>
   </div>
   <div className="all-users-content">
    <div className="top-bar-component">
     <div onClick={() => allUsersToggle} class="arrow-icon">
      <div class="arrow"></div>
     </div>
     <h4>Sembradores de Vida</h4>
    </div>
    <div className="user-info">
     <img src={sembrando} alt="" className="user-profile-image" />
     <h2> {name.split(" ").length >= 4 ? name.split(" ").slice(0, 3).join(" ") : name.split(" ")[0]}</h2>
     <h5>Conoce a otros Sembradores de vida de tu comunidad</h5>
    </div>

    {/*The Sketchiest way to overcome the fact that setting a state inside of an OnClick event just*/}

    <div className="all-users-group">
     {data.map((data, i) => (
      <div onClick={pickedUser === ''
       ? () => { setpickedUser(data.geometry); }
       : pickedUser === data.geometry
        ? () => { centerMapViewUser(); }
        : () => { setpickedUser('') }}
       className="all-users-single" key={i}>
       <img
        src={data.pic.length > 5 ? data.pic : defaultPic}
        alt=""
        style={pickedUser === '' ? { filter: "none" } : pickedUser === data.geometry ? { filter: "none" } : { filter: "grayscale(100%)" }} />
       <div className="all-users-info">
        <div className="all-users-info-container">
         <h5 style={pickedUser === '' ? { opacity: "1" } : pickedUser === data.geometry ? { opacity: "1" } : { opacity: "0.5" }}>{data.name}</h5>
         <div className="modal-button-green" style={pickedUser === '' ? { display: "none" } : pickedUser === data.geometry ? { display: "initial" } : { display: "none" }}>Conocer Más</div>
        </div>
       </div>
      </div>
     ))}

     <div onClick={pickedUser === ''
      ? () => { setpickedUser(geometry); }
      : pickedUser === geometry
       ? () => { centerMapViewUser() }
       : () => { setpickedUser('') }}
      className="all-users-single" >
      <img
       src={pic ? pic : defaultPic}
       alt=""
       style={pickedUser === '' ? { filter: "none" } : pickedUser === geometry ? { filter: "none" } : { filter: "grayscale(100%)" }} />
      <div className="all-users-info" style={{ borderBottom: "none" }}>
       <div className="all-users-info-container">
        <h5 style={pickedUser === '' ? { opacity: "1" } : pickedUser === geometry ? { opacity: "1" } : { opacity: "0.5" }}>{"Mi huerta"}</h5>
        <div className="modal-button-green" style={pickedUser === '' ? { display: "none" } : pickedUser === geometry ? { display: "initial" } : { display: "none" }}>Conocer Más</div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
