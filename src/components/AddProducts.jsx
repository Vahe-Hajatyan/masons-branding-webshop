import React, { useState } from "react";
import style from "../scss/AddProducts.module.scss";
import avatar from "../assets/tshirt.png";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const [img, setImg] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      comment: [],
      recommended: [],
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
    },
  });
  // const createProduct = async (newProduct) => {
  //   try {
  //     console.log(newProduct);
  //     await axios.post("http://localhost:3333/product", newProduct);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const submit = async (value) => {
    try {
      console.log(value);
      await axios.post("http://localhost:3333/product", value);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setValue("myFile", base64);
    const val = getValues("myFile");
    setImg(val);
  };
  return (
    <div className={style.productsBlock}>
      <form onSubmit={handleSubmit(submit)}>
        <label title="добавьте фотографию" className={style.customFileUpload}>
          <img src={img || avatar} alt="img" />
        </label>
        <input
          type="file"
          className={style.fileUpload}
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <input
          className={errors.name && style.validation}
          placeholder="добавьте имя продукта"
          {...register("name", {
            required: "добавьте имя продукта",
          })}
        />
        <input
          className={errors.teg && style.validation}
          placeholder="добавьте тэг через запятую"
          {...register("teg", {
            required: "добавьте тэг через запятую",
          })}
        />
        <input
          className={errors.price && style.validation}
          type="number"
          placeholder="добавьте цену"
          {...register("price", {
            required: "обавьте цену",
          })}
        />

        <input
          className={errors.maxCount && style.validation}
          type="number"
          placeholder="добавьте макс-количество"
          {...register("maxCount", {
            required: "добавьте макс-количество",
          })}
        />
        <input
          className={errors.size && style.validation}
          placeholder="добавьте размер через запятую"
          {...register("size", {
            required: "добавьте размер через запятую",
          })}
        />
        <input
          className={errors.color && style.validation}
          placeholder="добавьте цвет через запятую"
          {...register("color", {
            required: "добавьте цвет через запятую",
          })}
        />
        <textarea
          className={errors.description && style.validation}
          placeholder="добавьте описание"
          {...register("description", {
            required: "добавьте описание",
          })}
        />
        <button disabled={img == ""} type="submit">
          Отправить
        </button>
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
