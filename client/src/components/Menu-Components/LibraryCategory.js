import React from 'react'
import { useParams, Link } from "react-router-dom";
function LibraryCategory({ documents, userInfo }) {

  //Loops through and gets all the documents from all the users 

  let { category } = useParams();
  var localStore = JSON.parse(localStorage.getItem('state'));

  var documents2 = documents.map(d => d = { user: userInfo.filter(u => u._id === d.uId), ...d }).flat().filter(b1 => b1.uId !== localStore._id);


  function filterViaCategory(arr, category) {
    return arr.filter(obj => obj.categorias.some(cat => cat.includes(category)));
  }

  var documentsPerCat = filterViaCategory(documents2, category);


  return (
    <div className="component-library-category">

      <div className="component-library-text">
        <h2>Biblioteca</h2>
        <h4>{category}</h4>
      </div>

      <div className="component-library-categories-container">
        {documentsPerCat.length > 0 ?
          documentsPerCat.map((data, i) =>
            <Link to={`/menu/doc/${data._id}`}>
              <div div className="element-list-item-container" key={i}>
                <div src={data} className="element-list-item list-item-yellow" >
                  <div className="element-description" >
                    <h5 className="text-preview">{data.nombre}</h5>
                    <h6>{data.user[0].name}</h6>
                    <h6>{data.categorias.join(", ")}</h6>
                  </div>
                  <div className="arrow-gallery right" />
                </div>

              </div></Link>)
          : <p>{`La categoria ${category} no tiene documentos aún o no existe`}</p>}
      </div>
    </div>
  )
}

export default LibraryCategory
