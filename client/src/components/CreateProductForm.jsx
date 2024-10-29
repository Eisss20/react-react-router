import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImage] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [descriptionInput, setDescriptionInput] = useState("");

  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4001/products", {
        name: nameInput,
        image: imageInput,
        price: priceInput,
        description: descriptionInput,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleChange}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
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
            value={imageInput}
            onChange={(e) => setImage(e.target.value)}
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
            onChange={(e) => setPriceInput(e.target.value)}
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
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
