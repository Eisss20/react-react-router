import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function CreateProductForm() {
  const [nameInput, setNameInput] = useState("");
  const [imgInput, setImgInput] = useState("");
  const [priceInput,setPriceInput] = useState(0);
  const [detailInput,setDetailInput] = useState("");
  const navigate = useNavigate();

  const createForm = async (event) => {
    event.preventDefault();
    try {
       const newProduct = {
        name : nameInput,
        image: imgInput,
        price: priceInput,
        description: detailInput,
      }
     await axios.post("http://localhost:4001/products", newProduct);  
     navigate("/");
    } catch (error){
      console.error('Error fetching data:', error)
    }
  }

  return (
    <form className="product-form" onSubmit={createForm}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              console.log("Input value:", event.target.value);  
            setNameInput(event.target.value)}}
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
            onChange={(event) => {
            setImgInput(event.target.value)}}
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
            onChange={(event) => {setPriceInput(event.target.value)}}
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
            onChange={(event) => {setDetailInput(event.target.value)}}
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
