
import React, { useEffect, useState, useContext } from 'react';
import { FavoriteContext } from './favorites-context';

function FavoritePage() {
  
  const { favoriteIds} = useContext(FavoriteContext);
  const [favoriteProduct, setFavoriteProduct] = useState(null);

  useEffect(() => { 
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
