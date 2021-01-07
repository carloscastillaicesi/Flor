import React from 'react'

function ExchangeItem() {
 return (
  <div>
   {/* 
   {
      const [pickedProduct, setpickedProduct] = useState()
      
       pickedProductToggle(data.user[0].name, data.user[0].pic, data.user[0]._id, data.fotos, data.descripcion, data.cambio, data.nombre, data.categorias, data.id)

      function pickedProductToggle(userName, userPic, userId, fotos, descripcion, cambio, nombre, categorias, id) {
    if (userName) {
      const picked = {
        userName: userName,
        userPic: userPic,
        userId: userId,
        nombre: nombre,
        categorias: categorias,
        fotos: fotos,
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

    pickedProduct ?
     <div className="menu-picked-modal-background-container">
      <div className="picked">
       <div className="picked-top">
        <div>
         {!pickedProdID.includes(pickedProduct.id)
          ?
          <div className="element-options">
           <img src={document} alt="eye" /></div>
          :
          <div className="element-options"><img src={Hdocument} alt="eye" /></div>
         }
         <h6>{pickedProdID.includes(pickedProduct.id) ? "Este producto se encuentra oculto" : "Este producto se encuentra visible"}</h6>
        </div>
        <div onClick={() => pickedProductToggle()} className="close-picked">x</div>
       </div>
       <h2>{"Necesito"}</h2>
       <h1>{pickedProduct.nombre}</h1>
       <h5><strong>Categorías: </strong>{pickedProduct.categorias.join(", ")}</h5>



       <hr />
       <div className="product-description-box">
        <h4><strong>Descripción</strong></h4>
        <h5>{pickedProduct.descripcion}</h5>
       </div>
       <hr />
       <div className="product-description-box">
        <h4><strong>Cambio</strong></h4>
        <h5>{pickedProduct.cambio}</h5>
       </div>
       <hr />
       <div className="picked-owner">
        <img src={localStore.pic} alt="" />
        <h5>{"Necesitas este producto"}</h5>
       </div>
      </div>
     </div>
     : ""
   }



   {
    pickedProduct ?
     <div className="menu-picked-modal-background-container">
      <div className="picked">
       <div className="picked-top">
        <div>
         {!pickedProdID.includes(pickedProduct.id)
          ?
          <div className="element-options">
           <img src={document} alt="eye" /></div>
          :
          <div className="element-options"><img src={Hdocument} alt="eye" /></div>
         }
         <h6>{pickedProdID.includes(pickedProduct.id) ? "Este producto se encuentra oculto" : "Este producto se encuentra visible"}</h6>
        </div>
        <div onClick={() => pickedProductToggle()} className="close-picked">x</div>
       </div>
       <h2>{"Tengo"}</h2>
       <h1>{pickedProduct.nombre}</h1>
       <h5><strong>Categorías: </strong>{pickedProduct.categorias.join(", ")}</h5>

       <div class="picked-gallery-wrapper">
        {pickedProduct.fotos ?
         <div>{
          pickedProduct.fotos.map((data, i) =>
           <img key={i} src={data} alt="gallery" onError={(e) => { e.target.src = 'https://i.ibb.co/C1CcBXb/Imagen-Da-ada.png'; e.target.onError = null; }} />)
         }</div> : <p> {pickedProduct.userName.split(" ")[0]} no ha subido imágenes</p>}
       </div>

       <hr />
       <div className="product-description-box">
        <h4><strong>Descripción</strong></h4>
        <h5>{pickedProduct.descripcion}</h5>
       </div>
       <hr />
       <div className="product-description-box">
        <h4><strong>Cambio</strong></h4>
        <h5>{pickedProduct.cambio}</h5>
       </div>
       <hr />
       <div className="picked-owner">
        <img src={localStore.pic} alt="" />
        <h5>{"tienes este producto para intercambiar"}</h5>
       </div>
      </div>
     </div>
     : ""
   }


   {
    pickedProduct ?
     <div className="picked-modal-background-container">
      <div className="picked">
       <div className="picked-top">
        <div>
         {!pickedProdID.includes(pickedProduct.id)
          ?
          <div className="element-options">
           <img src={document} alt="eye" /></div>
          :
          <div className="element-options"><img src={Hdocument} alt="eye" /></div>
         }
         <h6>{pickedProdID.includes(pickedProduct.id) ? "Este producto se encuentra oculto" : "Este producto se encuentra visible"}</h6>
        </div>
        <div onClick={() => pickedProductToggle()} className="close-picked">x</div>
       </div>
       <h2>{switchedState === 0 ? "Tengo" : "Necesito"}</h2>
       <h1>{pickedProduct.nombre}</h1>
       <h5><strong>Categorías: </strong>{pickedProduct.categorias.join(", ")}</h5>
       {switchedState === 0 ?
        <div class="picked-gallery-wrapper">
         {pickedProduct.fotos ?
          <div>{
           pickedProduct.fotos.map((data, i) =>
            <img key={i} src={data} alt="gallery" onError={(e) => { e.target.src = 'https://i.ibb.co/C1CcBXb/Imagen-Da-ada.png'; e.target.onError = null; }} />)
          }</div> : <p> {name.split(" ")[0]} no ha subido imágenes</p>}
        </div>

        : ""}
       <hr />
       <div className="product-description-box">
        <h4><strong>Descripción</strong></h4>
        <h5>{pickedProduct.descripcion}</h5>
       </div>
       <hr />
       <div className="product-description-box">
        <h4><strong>Cambio</strong></h4>
        <h5>{pickedProduct.cambio}</h5>
       </div>
       <hr />
       <div className="picked-owner">
        <img src={pic} alt="" />
        <h5> <strong>{name.split(" ")[0]} </strong>     <span>{switchedState === 0 ? "tiene este producto para intercambiar" : "quisiera tener este producto"}</span> </h5>
       </div>

       <div className="picked-actions" onClick={setModal.bind()}>Ir a este {switchedState === 0 ? "Intercambio" : "Anuncio"}</div>

      </div>
     </div>
     : ""
   }


   {
    pickedProduct ?
     <div className="menu-picked-modal-background-container">
      <div className="picked">
       <div className="picked-top">
        <div>
         {!pickedProdID.includes(pickedProduct.id)
          ?
          <div className="element-options">
           <img src={document} alt="eye" /></div>
          :
          <div className="element-options"><img src={Hdocument} alt="eye" /></div>
         }
         <h6>{pickedProdID.includes(pickedProduct.id) ? "Este producto se encuentra oculto" : "Este producto se encuentra visible"}</h6>
        </div>
        <div onClick={() => pickedProductToggle()} className="close-picked">x</div>
       </div>
       <h2>{"Tengo"}</h2>
       <h1>{pickedProduct.nombre}</h1>
       <h5><strong>Categorías: </strong>{pickedProduct.categorias.join(", ")}</h5>

       <div class="picked-gallery-wrapper">
        {pickedProduct.fotos ?
         <div>{
          pickedProduct.fotos.map((data, i) =>
           <img key={i} src={data} alt="gallery" onError={(e) => { e.target.src = 'https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png'; e.target.onError = null; }} />)
         }</div> : <p> {pickedProduct.userName.split(" ")[0]} no ha subido imágenes</p>}
       </div>

       <hr />
       <div className="product-description-box">
        <h4><strong>Descripción</strong></h4>
        <h5>{pickedProduct.descripcion}</h5>
       </div>
       <hr />
       <div className="product-description-box">
        <h4><strong>Cambio</strong></h4>
        <h5>{pickedProduct.cambio}</h5>
       </div>
       <hr />
       <div className="picked-owner">
        <img src={pickedProduct.userPic} alt="" />
        <h5> <strong>{pickedProduct.userName.split(" ")[0]} </strong> tiene este producto para intercambiar </h5>
       </div>
       <div className="picked-actions" onClick={() => history.push(`/map/${pickedProduct.userId}`)}>Ir al perfil de {pickedProduct.userName.split(" ")[0]}</div>
      </div>
     </div>
     : ""
   }
 */}




  </div>
 )
}

export default ExchangeItem
