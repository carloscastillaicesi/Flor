import React, { useState, useEffect, useContext } from 'react'
import document from "../../assets/ver-documento.svg";
import Hdocument from "../../assets/ocultar-documento.svg";
import deleteI from "../../assets/delete.svg";
import { BarterContext } from "../../contexts/BarterContext";
import { Link } from "react-router-dom";

function ExchangeNeed() {
  var localStore = JSON.parse(localStorage.getItem('state'));
  const { barters } = useContext(BarterContext);
  const [userHaves] = useState(barters.filter(b1 => b1.tipo === 1 && b1.uId === localStore._id));
  const [pickedProduct, setpickedProduct] = useState();
  const [pickedProdID, setpickedProdID] = useState([]);
  const [deletionpickedProdID, setdeletionpickedProdID] = useState();
  const [deletedpickedProdID, setdeletepickedProdID] = useState([]);



  function prodSetter(id) {
    if (pickedProdID.includes(id)) {
      let filteredArray = pickedProdID.filter(item => item !== id)
      setpickedProdID(filteredArray);
    } else {
      setpickedProdID([...pickedProdID, id]);
    }
  }


  function prodDelete(id) {
    setdeletepickedProdID([...deletedpickedProdID, id]);
  }


  function deletionProcess(id) {
    if (id !== deletionpickedProdID) {
      setdeletionpickedProdID(id);
    } else {
      setdeletionpickedProdID();
    }

  }

  function pickedProductToggle(descripcion, cambio, nombre, categorias, id) {

    if (descripcion) {
      const picked = {
        nombre: nombre,
        categorias: categorias,
        descripcion: descripcion,
        cambio: cambio,
        id: id
      }
      setpickedProduct(picked);
      console.log("pickedProduct", pickedProduct);
      console.log("picked", picked);
    } else {
      setpickedProduct();
    }

  }


  useEffect(() => {
    console.log("Hide Product: ", pickedProdID);
    console.log("Deletion Process of Product: ", deletionpickedProdID);
    console.log("Deleted Products: ", deletedpickedProdID);
  }, [pickedProdID, deletedpickedProdID, deletionpickedProdID, pickedProduct, userHaves])




  return (

    <div className="component-menuexchange">
      <div className="component-exchange-text">
        <h2>Intercambios</h2>
        <h5>Cosas que necesito</h5>
      </div>

      <div >

        {userHaves.length > 0 ?
          userHaves.map((data, i) =>
            <Link to={`/menu/item/${data._id}`}>
              <div key={i} className={deletedpickedProdID.includes(data._id) ? "element-list-item-container-deleted" : "element-list-item-container"}>

                {deletionpickedProdID === data._id ?

                  <div className={deletionpickedProdID.includes(data._id) ? "element-list-item-deletion" : "element-list-item"}>

                    <img src={deleteI} alt="" />
                    <h5>¿Deseas eliminar este Item?</h5>
                    <div className="element-options" onClick={() => prodDelete(data._id)}>Sí</div>
                    <div className="element-options" onClick={() => deletionProcess(data._id)}>No</div>
                  </div>

                  :

                  <div src={data} className={pickedProdID.includes(data._id) ? "element-list-item-hidden" : "element-list-item"} >

                    <div className="element-description" onClick={() => pickedProductToggle(data.descripcion, data.cambio, data.nombre, data.categorias, data.id)}  >
                      <h4>{data.nombre}</h4>
                      <h5>{data.categorias.join(", ")}</h5>
                    </div>

                    {pickedProdID.includes(data._id)
                      ?
                      ""
                      :
                      <div className="element-options" onClick={() => deletionProcess(data._id)}><img src={deleteI} alt="" /></div>
                    }

                    {!pickedProdID.includes(data._id)
                      ?
                      <div className="element-options" onClick={() => prodSetter(data._id)}>
                        <img src={document} alt="eye" /></div>
                      :
                      <div className="element-options" onClick={() => prodSetter(data._id)}><img src={Hdocument} alt="eye" /></div>
                    }
                  </div>
                }
              </div></Link>)
          :
          <div className="component-exchange-text">
            <br />
            <h6>No has registrado anuncios aún de lo que necesitas</h6>
          </div>
        }
      </div>
    </div>

  )
}

export default ExchangeNeed
