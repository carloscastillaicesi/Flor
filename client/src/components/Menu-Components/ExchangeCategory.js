
import React from 'react'
import { useParams, Link } from "react-router-dom";

function ExchangeNeedCategory({ products, userInfo }) {
  let { category, type } = useParams();

  type = parseInt(type);

  var localStore = JSON.parse(localStorage.getItem('state'));

  //Loops through and gets all the documents from all the users 
  var products2 = products.map(d => d = { user: userInfo.filter(u => u._id === d.uId), ...d }).flat().filter(b1 => b1.tipo === type && b1.uId !== localStore._id);

  console.log("producst2", products2)

  function filterViaCategory(arr, category) {
    return arr.filter(obj => obj.categorias.some(cat => cat.includes(category)));
  }

  var productsPerCat = filterViaCategory(products2, category);


  return (
    <div className="component-library-category">

      <div className="component-library-text">
        <h2>Intercambios</h2>
        <h4>{category}</h4>
      </div>

      <div className="component-library-categories-container">

        {productsPerCat.length > 0 ?
          productsPerCat.map((data, i) =>
            <Link to={`/menu/item/${data._id}`}>
              <div div className={"element-list-item-container"} key={i}>
                <div src={data} className={"element-list-item list-item-yellow"} >

                  <div className="element-description" onClick={() => {/*Click and go to item page*/ }}>

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

export default ExchangeNeedCategory
