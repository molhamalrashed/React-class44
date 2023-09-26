import React  from 'react';
import { Link } from 'react-router-dom';

const RenderProduct = ({product}) => {
  return (
    <Link to={`/product/${product.id}`}>
    <div>
        <img className="product-img" src={product.image} alt={product.title}/>
        <h1>
            Fake: {product.title}
        </h1>
    </div>
    </Link>
  )
}

export default RenderProduct;


