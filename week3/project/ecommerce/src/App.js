import React, { useState} from 'react';
import './App.css';
import RenderProduct from './components/render-product.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductDetail from './components/products-details.jsx';
import DropList from './components/drop-list.jsx';
import { FavoriteProvider } from './components/favorites-context';
import FavoritesPage from './components/favorite-page';
import useFetch from './components/use-fetch';

function App() {
  
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch('https://fakestoreapi.com/products/categories');
  const { data: products = [], loading: productsLoading, error: productsError } = useFetch('https://fakestoreapi.com/products');

  const [selectedCategory, setSelectedCategory] = useState(null);
  

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === null || selectedCategory.includes(product.category)
  );

  if (categoriesError || productsError) {
    return <h1>An error happened during fetching data: {categoriesError || productsError}</h1>;
  } else if (categoriesLoading || productsLoading) {
    return <h1>Loading ..</h1>;
  } else {
    return (
      <FavoriteProvider>
        <Router>
          <div className="App">
            <nav>
              <ul>
                <li>
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li>
                  <Link className='nav-link' to="/favourites">Favorites</Link>
                </li>
              </ul>
            </nav>
            <h1 className="title">Products</h1>
            <div className="categories">
              <h1>Selected Category: {selectedCategory}</h1>
              <DropList options={categories} onSelect={handleCategory} />
            </div>
            <Routes>
              <Route path="/favourites" element={<FavoritesPage />} />
              <Route
                path="/product/:id"
                element={<ProductDetail />}
              ></Route>
              <Route
                path="/"
                element={
                  <ul className="products">
                    {filteredProducts.map((product) => (
                      <li className="product" key={product.id}>
                        <RenderProduct product={product} />
                      </li>
                    ))}
                  </ul>
                }
              />
            </Routes>
          </div>
        </Router>
      </FavoriteProvider>
    );
  }
}

export default App;
