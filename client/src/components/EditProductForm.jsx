import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
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

  const clickUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:4001/products/${param.productID}`, {
        name,
        image,
        price,
        description,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="product-form" onSubmit={clickUpdate}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            value={image}
            onChange={(event) => setImage(event.target.value)}
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
            value={price}
            onChange={(event) => setPrice(event.target.value)}
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
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
