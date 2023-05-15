import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "../assets/loading.gif";

export const ProductList = () => {
  const [url, setUrl] = useState("http://localhost:8000/products/");
  const { data: products, loading, error } = useFetch(url, { content: "ABC" });
  /*  
  const [products, setProducts] = useState([]);
  const fetchProducts = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }, [url]);

  useEffect(() => {
    /*  //Replace the lifecycle method compnentDidMount
    console.log("Mounted");
    //Replace the lifecycle method compnentWillUnMount
    return console.log("UnMounted"); 
    fetchProducts();
  }, [fetchProducts]); */

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products/")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock Only
        </button>
      </div>
      {loading && <img src={Loading} alt="loading" className="loading" />}
      {error && <p>{error}</p>}
      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span>${product.price}</span>
              <span className={product.in_stock ? "instock" : "unavailable"}>
                {product.in_stock ? "In Stock" : "Unavailable"}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
