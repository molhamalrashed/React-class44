import React, {useState, useEffect} from 'react';
import './App.css';
import RenderProduct from './components/render-product.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/products-details.jsx';
import fetchCategories from './components/fetching-categories.jsx'
import fetchProducts from './components/fetching-products.jsx'
import DropList from './components/drop-list.jsx'
import {FavoriteProvider} from './components/favorites-context';

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(()=>{
    fetchCategories().then((data)=>{
      setCategories(data);
    }).catch((err)=>{
      setError(err);
      console.log(`App:${err}`);
    })
    },[])

  useEffect(()=>{
    fetchProducts().then((data) =>{
      setProducts(data);
    }).catch((err)=>{
      setError(err)
    })
    },[])
  

  const handleCategory = (category) => {
    setSelectedCategory(category);
  }

  const filteredProducts = products.filter((product) => 
   selectedCategory === null || selectedCategory.includes(product.category)
  );

if(error){
  return(
    <h1>An error happened during fetching data: {error}</h1>
  )
}
else if(!categories  || !products){
  return(
    <h1>Loading ..</h1>
  )
}
  else{
  return (
    <FavoriteProvider>
    <Router>
      <div className="App">
        <h1 className='title'>Products</h1>
        <div className='categories'>
          <h1> Selected Category: {selectedCategory}</h1>
          <DropList options={categories} onSelect={handleCategory} />
        </div>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail/>}>
          </Route>
          <Route path="/"
            element={<ul className="products">
              {filteredProducts.map((product) => (
                <li className="product">
                  <RenderProduct key={product.id} product={product} />
                </li>
              ))}
            </ul>}/>
        </Routes>
      </div>
    </Router> 
    </FavoriteProvider>
  );
 }
}

export default App;
