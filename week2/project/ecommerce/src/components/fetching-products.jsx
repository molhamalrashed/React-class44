async function fetchProducts (){
    try{
    const res =  await fetch('https://fakestoreapi.com/products')
    const products = await res.json();
    return products;
    }catch(err){
        console.log(`An error happened during fetching products: ${err}`);
    }
    
  }


export default fetchProducts;