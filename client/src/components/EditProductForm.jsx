import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const [nameInput, setNameInput] = useState("");
  const [imgInput, setImgInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [detailInput, setDetailInput] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {                     
      const response = await axios.get(`http://localhost:4001/products/${id}`);
      const product = response.data;
      setNameInput(product.name);
      setImgInput(product.image);
      setPriceInput(product.price);
      setDetailInput(product.description);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const reCreateFrom = async (event) => {
    event.preventDefault();
    try {
      const updatedProduct = {
        name: nameInput,
        image: imgInput,
        price: priceInput,
        description: detailInput,
      };
      await axios.put(`http://localhost:4001/products/${id}`, updatedProduct);
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <form className="product-form" onSubmit={reCreateFrom}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
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
            value={imgInput}
            onChange={(event) => setImgInput(event.target.value)}
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
            value={priceInput}
            onChange={(event) => setPriceInput(Number(event.target.value))}
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
            value={detailInput}
            onChange={(event) => setDetailInput(event.target.value)}
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