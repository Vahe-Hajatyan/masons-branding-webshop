import React, { useState } from "react";
import style from "../scss/AddProducts.module.scss";
import avatar from "../assets/tshirt.png";
import axios from "axios";

const AddProducts = () => {
  const [product, setProduct] = useState({
    comment: [],
    Recommended: [],
    favorites: false,
    basket: false,
    price: Number,
    maxCount: Number,
    myFile: "",
    name: "",
    teg: "",
    size: "",
    color: "",
    description: "",
  });
  const createProduct = async (newProduct) => {
    try {
      console.log(newProduct);
      await axios.post("http://localhost:3333/product", newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(product);
    console.log("Uploaded");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setProduct({ ...product, myFile: base64 });
  };

  return (
    <div className={style.productsBlock}>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="file-upload"
          title="добавьте фотографию"
          className={style.customFileUpload}
        >
          <img src={product.myFile || avatar} alt="" />
        </label>
        <input
          type="file"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
          hidden
        />
        <input
          placeholder="добавьте имя продукта"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          placeholder="добавьте тэг через запятую"
          value={product.teg}
          onChange={(e) => setProduct({ ...product, teg: e.target.value })}
        />
        <input
          type="number"
          placeholder="добавьте цену"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <input
          type="number"
          placeholder="добавьте макс-количество"
          value={product.maxCount}
          onChange={(e) => setProduct({ ...product, maxCount: e.target.value })}
        />
        <input
          placeholder="добавьте размер через запятую"
          value={product.size}
          onChange={(e) => setProduct({ ...product, size: e.target.value })}
        />
        <input
          placeholder="добавьте цвет через запятую"
          value={product.color}
          onChange={(e) => setProduct({ ...product, color: e.target.value })}
        />
        <textarea
          placeholder="добавьте описание"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default AddProducts;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
