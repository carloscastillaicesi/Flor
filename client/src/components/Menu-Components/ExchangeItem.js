import React, { useState, useContext } from 'react'
import { useParams, Link } from "react-router-dom";
import { SettingContext } from "../../contexts/SettingContext";
function ExchangeItem({ barters, userInfo }) {

 let { id } = useParams();

 var localStore = JSON.parse(localStorage.getItem('state'));
 const { toggleModal, setMessage, setmodalType } = useContext(SettingContext);

 const [item] = useState(barters.filter(d => d._id === id)[0])
 console.log("item", userInfo)
 const [owner] = useState(userInfo.filter(d => d._id === item.uId)[0])
 console.log("owner", owner)

 return (
  <div className="component-single-item">
   <div >
    <div className="picked">
     <h2>{item.tipo === 0 ? "Tengo" : "Necesito"}</h2>
     <h1>{item.nombre}</h1>
     <h5><strong>Categorías: </strong>{item.categorias.join(", ")}</h5>
     {item.tipo === 0 ?
      <div class="picked-gallery-wrapper">
       {item.fotos ?
        <div>{
         item.fotos.map((data, i) =>
          <img key={i} src={data} alt="gallery" onError={(e) => { e.target.src = 'https://i.ibb.co/C1CcBXb/Imagen-Da-ada.png'; e.target.onError = null; }} />)
        }</div> : <p> {owner.name.split(" ")[0]} no ha subido imágenes</p>}
      </div>

      : ""}
     <hr />
     <div className="product-description-box">
      <h4><strong>Descripción</strong></h4>
      <h5>{item.descripcion}</h5>
     </div>
     <hr />
     <div className="product-description-box">
      <h4><strong>Cambio</strong></h4>
      <h5>{item.cambio}</h5>
     </div>
     <hr />
     <div className="picked-owner">
      <img src={owner.pic} alt="" />

      {localStore._id !== owner._id ?
       <h5>  <strong>{owner.name.split(" ")[0]} </strong>     <span>{item.tipo === 0 ? "tiene este producto para intercambiar" : "quisiera tener este producto"}</span>          </h5>
       : <h5><span>{item.tipo === 0 ? "Quieres intercambiar este producto" : "Quisieras tener este producto"}</span>       </h5>}
     </div>



     {localStore._id !== owner._id &&
      <Link to={`/map/${owner._id}`}>

       <div className="picked-actions">  {`Ir al perfil de ${owner.name.split(" ").length >= 4 ? owner.name.includes("del") ? owner.name.split(" ").slice(0, 3).join(" ") : owner.name.split(" ").slice(0, 2).join(" ") : owner.name.split(" ")[0]}`}</div></Link>}

     {localStore._id !== owner._id &&
      <div onClick={() => { setMessage(3); toggleModal(); setmodalType(1) }} className="picked-actions">  {`Contactar a ${owner.name.split(" ").length >= 4 ? owner.name.includes("del") ? owner.name.split(" ").slice(0, 3).join(" ") : owner.name.split(" ").slice(0, 2).join(" ") : owner.name.split(" ")[0]} para intercambio`}</div>}

    </div>



   </div>


  </div>
 )
}

export default ExchangeItem
