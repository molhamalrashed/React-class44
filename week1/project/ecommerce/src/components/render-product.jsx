import React  from 'react';


const RenderProduct = ({product}) => {
  return (
    <div>
        <img className = "product-img" src={product.image} alt = {product.title}/>
        <h1>
            Fake: {product.title}
        </h1>
    </div>
  )
}

export default RenderProduct;


