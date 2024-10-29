import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewProductPage() {
  const navigate = useNavigate();
  const [viewProduct, setViewProduct] = useState([]);
  const param = useParams();

  useEffect(() => {
    getViewProduct();
  }, []);

  const getViewProduct = async () => {
    try {
      const results = await axios.get(
        `http://localhost:4001/products/${param.productId}`
      );
      setViewProduct(results.data.data);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name: {viewProduct.name}</h2>
        <p>{viewProduct.price} THB</p>
        <p>{viewProduct.description} </p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
