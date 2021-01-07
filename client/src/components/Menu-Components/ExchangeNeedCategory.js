
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import document from "../../assets/ver-documento.svg";
import Hdocument from "../../assets/ocultar-documento.svg";
import deleteI from "../../assets/delete.svg";
function ExchangeNeedCategory({ products, userInfo }) {

  //Loops through and gets all the documents from all the users 

  let { category } = useParams();

  var products2 = products.map(d => d = { user: userInfo.filter(u => u._id === d.uId), ...d }).flat();

  function filterViaCategory(arr, category) {
    return arr.filter(obj => obj.categorias.some(cat => cat.includes(category)));
  }

  var productsPerCat = filterViaCategory(products2, category);

  const [pickedProdID, setpickedProdID] = useState([]);
  const [deletionpickedProdID, setdeletionpickedProdID] = useState();
  const [deletedpickedProdID, setdeletepickedProdID] = useState([]);


  function docSetter(id) {
    if (pickedProdID.includes(id)) {
      let filteredArray = pickedProdID.filter(item => item !== id)
      setpickedProdID(filteredArray);
    } else {
      setpickedProdID([...pickedProdID, id]);
    }
  }

  function docDelete(id) {
    setdeletepickedProdID([...deletedpickedProdID, id]);
  }

  function deletionProcess(id) {
    if (id !== deletionpickedProdID) {
      setdeletionpickedProdID(id);
    } else {
      setdeletionpickedProdID();
    }
  }


  useEffect(() => {
    console.log("Hide Document: ", pickedProdID);
    console.log("Deletion Process of Document: ", deletionpickedProdID);
    console.log("Deleted products: ", deletedpickedProdID);
  }, [pickedProdID, deletedpickedProdID, deletionpickedProdID])


  return (
    <div className="component-library-category">

      <div className="component-library-text">
        <h2>Intercambios</h2>
        <h4>{category}</h4>
      </div>

      <div className="component-library-categories-container">

        {productsPerCat.length > 0 ?
          productsPerCat.map((data, i) =>

            <div div className={deletedpickedProdID.includes(data._id) ? "element-list-item-container-deleted" : "element-list-item-container"} key={i}>

              {deletionpickedProdID === data._id ?

                <div className={deletionpickedProdID.includes(data._id) ? "element-list-item-deletion" : "element-list-item"}>

                  <img src={deleteI} alt="" />
                  <h5>¿Deseas eliminar este Anuncio?</h5>
                  <div className="element-options" onClick={() => docDelete(data._id)}>Sí</div>
                  <div className="element-options" onClick={() => deletionProcess(data._id)}>No</div>
                </div>

                :

                <div src={data} className={pickedProdID.includes(data._id) ? "element-list-item-hidden" : "element-list-item"} >

                  <div className="element-description" onClick={() => {/*Click and go to item page*/ }}>

                    <h5 className="text-preview">{data.nombre}</h5>
                    <h6>{data.user[0].name}</h6>
                    <h6>{data.categorias.join(", ")}</h6>
                  </div>

                  {pickedProdID.includes(data._id)
                    ?
                    ""
                    :
                    <div className="element-options" onClick={() => deletionProcess(data._id)}><img src={deleteI} alt="" /></div>
                  }

                  {!pickedProdID.includes(data._id)
                    ?
                    <div className="element-options" onClick={() => docSetter(data._id)}>
                      <img src={document} alt="eye" /></div>
                    :
                    <div className="element-options" onClick={() => docSetter(data._id)}><img src={Hdocument} alt="eye" /></div>
                  }

                </div>
              }
            </div>)
          : <p>{`La categoria ${category} no tiene documentos aún o no existe`}</p>}
      </div>
    </div>
  )
}

export default ExchangeNeedCategory
