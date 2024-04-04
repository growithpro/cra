import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/products?limit=100");
      const productdata = await data.json();
      // console.log(productdata);
      setProducts(productdata.products);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header full_products">
        {products &&
          products.map((product) => {
            return (
              <div key={product.id} className="single_product">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="image"
                />
                <span>{product.name}</span>
                <p className="pname">{product.description}</p>
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;
