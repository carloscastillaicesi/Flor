import React, { useState } from 'react'
import { Link } from "react-router-dom";
function ExchangeNeedAllCategories({ products, userInfo }) {

  var localStore = JSON.parse(localStorage.getItem('state'));

  const [switched, setSwitched] = useState(products.filter(b => b.tipo === 0 && b.uId !== localStore._id))
  const [switchedState, setswitchedState] = useState(0)


  function setArray(type) {
    if (type === 0) {
      setSwitched(products.filter(b => b.tipo === 0));
      setswitchedState(0);
    } else if (type === 1) {
      setSwitched(products.filter(b => b.tipo === 1));
      setswitchedState(1);
    }
  }

  //Loops through and gets all the products from all the users 
  var prods = switched;

  //Loops through and gets just the "categorias" key from "documentos" from all the users 
  var categorias = prods.map((prods) => prods.categorias).flat();

  //Filters unique string in the "categorias" array
  categorias = categorias.filter((x, i, a) => a.indexOf(x) === i && x.length > 0);

  //Loops through and gets just the "categorias" key from "documentos" from all the users and join its in a single string
  var categoriasJoin = prods.map((prods) => prods.categorias.join(","));

  //Loops through all the products categories, that are now in a pair and joines by a ",", then seeing if each contains in that string a unique category. Then, it returns an array where each key matches the order that "categoriasJoin" has designated for each unique category. 
  var itemsCategoria = categorias.map((categorias) => categoriasJoin.filter(i => i.includes(categorias)).length)

  // var productsPerCat = products.map((products) =>
  //  categorias.map((categorias) => products.categorias.filter((i) => i.includes(categorias))))

  return (
    <div className="component-library">
      <div className="component-library-text">
        <h2>Intercambios</h2>
        <h6>Aqui encuentras los tengo y necesito de todas las personas de la red</h6>
      </div>
      <div className="menu-exchange-switch">

        <div className={switchedState === 0 ? "menu-exchange-switch-item-checked" : "menu-exchange-switch-item-unchecked"} onClick={() => setArray(0)}>Tengo</div>

        <div className={switchedState === 1 ? "menu-exchange-switch-item-checked" : "menu-exchange-switch-item-unchecked"} onClick={() => setArray(1)}
        >Necesito</div>
      </div>
      <br />
      <div className="component-library-categories-container">
        {categorias.map((categorias, i) =>


          <Link to={`categories/${categorias}/${switchedState}`}>
            <div key={i} className="component-library-categories yellow-border">
              <h3>{categorias}</h3>
              <div>
                <h5>{itemsCategoria[i]}</h5>
                <div class="arrow-library right arrow-yellow" /></div>
            </div></Link>)}
      </div>
    </div>
  )
}

export default ExchangeNeedAllCategories
