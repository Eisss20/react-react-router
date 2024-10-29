import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditProductForm() {
  const params = useParams();
  const navigate = useNavigate();
  const [editPoduct, setEditPoduct] = useState({
    name: "",
    image: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/products/${params.productId}`
      );
      setEditPoduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const putProducts = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4001/products/${params.productId}`, editPoduct
      );
      setEditPoduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };
  return (
    <form className="product-form " onSubmit={putProducts}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={editPoduct.name}
            onChange={(e) => {
              setEditPoduct({ ...editPoduct, name: e.target.value });
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={editPoduct.image}
            onChange={(e) => {
              setEditPoduct({ ...editPoduct, image: e.target.value });
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={editPoduct.price}
            onChange={(e) => {
              setEditPoduct({ ...editPoduct, price: e.target.value });
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={editPoduct.description}
            onChange={(e) => {
              setEditPoduct({ ...editPoduct, description: e.target.value });
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
