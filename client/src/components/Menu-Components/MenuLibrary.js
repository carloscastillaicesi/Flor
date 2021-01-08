import React from 'react'
import { Link } from "react-router-dom";
function MenuLibrary({ documents }) {
   var localStore = JSON.parse(localStorage.getItem('state'));
   //Loops through and gets all the documents from all the users 
   var docs = documents.filter(b1 => b1.uId !== localStore._id);

   //Loops through and gets just the "categorias" key from "documentos" from all the users 
   var categorias = docs.map((docs) => docs.categorias).flat();

   //Filters unique string in the "categorias" array
   categorias = categorias.filter((x, i, a) => a.indexOf(x) === i);

   //Loops through and gets just the "categorias" key from "documentos" from all the users and join its in a single string
   var categoriasJoin = docs.map((docs) => docs.categorias.join(","));

   //Loops through all the documents categories, that are now in a pair and joines by a ",", then seeing if each contains in that string a unique category. Then, it returns an array where each key matches the order that "categoriasJoin" has designated for each unique category. 
   var itemsCategoria = categorias.map((categorias) => categoriasJoin.filter(i => i.includes(categorias)).length)


   // var documentsPerCat = documents.map((documents) =>
   //  categorias.map((categorias) => documents.categorias.filter((i) => i.includes(categorias))))

   return (
      <div className="component-library">
         <div className="component-library-text">
            <h2>Biblioteca</h2>
            <h6>Encuentra información especifica que otros Sembradores de vida nos han compartido </h6>
         </div>


         <div className="component-library-categories-container">

            <Link to={`library/recent`}>
               <div className="component-library-categories green-border">
                  <h3>Lo más reciente</h3>
                  <div>
                     <div class="arrow-library right arrow-green" /></div>
               </div></Link>

            <hr />
            {categorias.map((categorias, i) =>
               <Link to={`library/${categorias}`}>
                  <div key={i} className="component-library-categories yellow-border ">
                     <h3>{categorias}</h3>
                     <div>
                        <h5>{itemsCategoria[i]}</h5>
                        <div class="arrow-library arrow-yellow right" /></div>
                  </div></Link>)}
         </div>
      </div>
   )
}

export default MenuLibrary
