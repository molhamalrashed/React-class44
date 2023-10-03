  import React, {useContext} from 'react';
  import { Link } from 'react-router-dom';
  import RegularHeart from './regular-heart';
  import SolidHeart from './solid-heart';
  import { FavoriteContext } from './favorites-context';

  
  const RenderProduct = ({product}) => {

  const { favoriteIds, addFavoriteId, removeFromFavoriteIds, isFavorite } = useContext(FavoriteContext);

  const IsProductFavorite = isFavorite(product.id);

  const toggleFavorite = () => {
    if(IsProductFavorite){
      console.log(`remove from ${favoriteIds.length}`)
      removeFromFavoriteIds(product.id)
    } else {
      console.log(`add to ${favoriteIds.length}`)
      addFavoriteId(product.id)
    }
  }


    return (
      <div>
      <Link to={`/product/${product.id}`}>
      <div>
          <img className="product-img" src={product.image} alt={product.title}/>
          <h1>
              Fake: {product.title}
          </h1>
      </div>
      </Link>
      <button onClick={toggleFavorite}>
        Favorite
            {IsProductFavorite? <SolidHeart /> : <RegularHeart />}
          </button>
      </div>
    )
  }

  export default RenderProduct;


