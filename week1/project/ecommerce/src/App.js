import React, {useState} from 'react';
import './App.css';
import RenderProduct from './components/render-product.jsx';
import products from './fake-data/all-products.js'
import categories from './fake-data/all-categories.js'
import DropList from './components/drop-list.jsx'

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  }

  const filteredProducts = products.filter((product) => 
   selectedCategory === null || selectedCategory.includes(product.category)
  );

    
  return (
    <div className="App">
      <h1 className='title'>Products</h1>
      <div className='categories'>
      <h1> Selected Category: {selectedCategory}</h1>
        <DropList options = {categories} onSelect={handleCategory} />
      </div>
      <ul className = "products">
        {filteredProducts.map((product)=>(
          <li className = "product">
          <RenderProduct key={product.id} product = {product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
