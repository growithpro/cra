import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(3);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/products?limit=48");
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
          products.slice(page * 12 - 12, page * 12).map((product) => {
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
        <div>
          
          {products.length && (
            <div className="pagination">
              <span>◀️</span>
              <span>
                {[...Array(products.length / 12)].map((_, i) => {
                  return <span key={i}>{i + 1}</span>;
                })}
              </span>
              <span>▶️</span>
            </div>
          )}
          
        </div>
      </header>
    </div>
  );
}

export default App;
