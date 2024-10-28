import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewProductPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    setProduct();
  }, []);

  const setProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/products/${param.productID}`
      );
      console.log(response);
      setName(response.data.data.name);
      setImage(response.data.data.image);
      setPrice(response.data.data.price);
      setDescription(response.data.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{name}</h2>
        <img src={image} alt={name} width="250" height="250" />
        <p>Price: {price}</p>
        <p>Description: {description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
