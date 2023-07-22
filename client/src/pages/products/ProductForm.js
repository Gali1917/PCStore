import React, { useState } from "react";
import { useProducts } from "../../context/index";
import { spinner } from "../../components/icons/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../../styles/forms.css";

const ProductForm = () => {
  const { addNewProduct, isLoading } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    description: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("description", product.description);
    formData.append("image", selectedImage);
    
    await addNewProduct(formData);
    
    toast.success("Nuevo producto añadido!", {
      position: "bottom-right",
    });
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="title-form">
        <h1>Guardar Producto</h1>
        <button disabled={!product.name || isLoading}>
          {isLoading ? (
            <span>{spinner} Cargando...</span>
          ) : (
            <span>Guardar</span>
          )}
        </button>
      </div>
      <div className="section">
        <div className="form">
          <div className="input-label">
            <label htmlFor="name">Nombre:</label>
            <input
              autoFocus
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="input-label">
            <label htmlFor="price">Precio:</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="input-label">
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              onChange={handleChange}
            />
          </div>
          <div className="input-label">
            <label htmlFor="description">Descripcion:</label>
            <textarea
              name="description"
              className="form-control"
              rows="4"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="card-image-form">
          <label htmlFor="image">Image:</label>
          <div className="image-upload-form">
            <img
              className="img-form"
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
              }
              alt="Imagen predeterminada"
            />
          </div>
        </div>
        <div className="div-input-image">
          <input
            className="input-image-form"
            type="file"
            name="image"
            id="image"
            onChange={(e) => setSelectedImage(e.target.files[0])
            }
          />
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
