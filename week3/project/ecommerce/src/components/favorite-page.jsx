import React, { useContext, useState, useEffect } from 'react';
import { FavoriteContext } from './favorites-context';

function FavoritesPage() {
  const { favoriteIds } = useContext(FavoriteContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);


  useEffect(() => {
    
    const fetchFavoriteProducts = async () => {
      const productDetails = [];

      for (const productId of favoriteIds) {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
          if (response.ok) {
            const productData = await response.json();
            productDetails.push(productData);
          }
        } catch (error) {
          console.error(`Error fetching product details for ID ${productId}:`, error);
        }
      }

      setFavoriteProducts(productDetails);
      console.log(productDetails)
    };

    fetchFavoriteProducts();
  }, [favoriteIds]);

  return (
    <div className='favorites'>
      <h1>Favorites</h1>
      <ul>
        {favoriteProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>{product.price} $</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage;
