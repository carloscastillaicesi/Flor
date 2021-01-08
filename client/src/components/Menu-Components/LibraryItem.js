import React, { useState } from 'react'
import { useParams } from "react-router-dom";
function LibraryItem({ documents, userInfo }) {

  let { id } = useParams();

  var localStore = JSON.parse(localStorage.getItem('state'));

  const [doc] = useState(documents.filter(d => d._id === id)[0])
  console.log("Doc", userInfo)
  const [owner] = useState(userInfo.filter(d => d._id === doc.uId)[0])
  console.log("owner", owner)

  return (
    <div className="component-single-item">
      {doc ?
        <div >
          <h1>{doc.nombre}</h1>
          <hr />
          <h3><strong>Temas</strong></h3>
          <h5>{doc.categorias.join(", ")}</h5>
          <hr />
          <div className="picked-owner">
            <img src={owner.pic} alt="" />
            <h5> <strong>{owner.name.split(" ")[0]} </strong>subió este documento</h5>
          </div>
          <a href={doc.url} target={"_blank"} rel="noopener noreferrer">  <div className="picked-actions">Ver Documento</div> </a>

        </div>

        : ""}
    </div>
  )
}

export default LibraryItem
