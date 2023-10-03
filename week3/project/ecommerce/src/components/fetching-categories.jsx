
async function fetchCategories (){
  try{
  const res =  await fetch('https://fakestoreapi.com/products/categories')
  const categories = res.json();
  return categories;
  }catch(err){
    console.log(`An error happened during fetching categories: ${err}`);
  }
}

export default fetchCategories;



