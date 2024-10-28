import { useNavigate,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

function ViewProductPage() {
  const navigate = useNavigate();
  const [ viewProduct, setViewproduct] =  useState([])
  const param = useParams()
  
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    
    try {
      const response = await axios.get(`http://localhost:4001/products/${param.id}`);
      setViewproduct(response.data.data)  //// ต้อง log ออกมาดู ถ้ากรณีไม่รู้ข้อมูลว่ามีกี่ชั้น 
      console.log(viewProduct);
      
      } catch (error) {
    }
  };
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title</h2>
        <p>{viewProduct.name}</p>
        <p>{viewProduct.price}</p>
        <p>{viewProduct.image}</p>
        <p>{viewProduct.description}</p>

      </div>
      <button onClick={() =>(navigate("/"))} >Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
