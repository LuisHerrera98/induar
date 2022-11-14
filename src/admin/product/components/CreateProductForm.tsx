import { useEffect, useState } from "react";
import { useCreateProduct } from "../hooks/web/useCreateProduct";
import "./stylesheets/CreateProductForm.css";
import subir from "./images/subir.gif";
import LoadingLarge from "../../../loadings/LoadingLarge";
import Success from "../../../alerts/Success";
import Error from "../../../alerts/Error";
import { useErrorList } from "../hooks/useErrorList";
import { useGetCategories } from "../../category/hooks/web/useGetCategories";
import { Category } from "../interfaces/CategoryInterface";

export const CreateProductForm = () => {
  useEffect(() => {
    loadCategories();
  }, []);

  const [categories, setCategories] = useState<Category[]>([])
  const loadCategories = async () => {
    const data = await useGetCategories()
    setCategories(data)
    
  }

  const [loading, setloading] = useState(false);
  const [success, setSuccess] = useState({
    state: false,
    message: "",
  });
  const [notSuccess, setNotSuccess] = useState({
    state: false,
    message: "",
  });

  const [errors, setErrors] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category_id: "",
  });
  const [image, setImage] = useState([]);

  const errorList = () => {
    const errors = useErrorList(product, image);
    setErrors(errors);
    errors.length === 0 ? setloading(true) : null;
    return errors;
  };

  const validateResponse = (data: any) => {
    if (data.message === "Invalid image file") {
      setloading(false);
      setNotSuccess({
        state: true,
        message: data.message,
      });
      setTimeout(() => {
        setNotSuccess({
          state: false,
          message: "",
        });
      }, 3000);
      return false;
    }
  };

  const loadingAndAlert = () => {
    setloading(false);

    setSuccess({
      state: true,
      message: "producto creado",
    });
    setTimeout(() => {
      setSuccess({
        state: false,
        message: "",
      });
    }, 3000);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errors = errorList();
    if (errors.length === 0) {
      try {
        const data: any = await useCreateProduct(product, image);
        const validate = validateResponse(data);
        if (validate !== false) {
          e.target.reset();
          loadingAndAlert();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setNotSuccess({
        state: true,
        message: "Faltan llenar campos",
      });
      setTimeout(() => {
        setNotSuccess({
          state: false,
          message: "",
        });
      }, 3000);
    }
  };

  const handleChange = (e: any) => {
    setErrors([]);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImage = (e: any) => {
    setErrors([]);
    setImage(e.target.files);
  };

  return (
    <div className="container-create-product-form">
      <form className="create-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese el nombre"
          name="name"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="number"
          placeholder="ingrese el precio"
          name="price"
          onChange={handleChange}
          autoComplete="off"
        />
        <select
        defaultChecked={true}
          name="category_id"
          id="select"
          onChange={handleChange}
          autoComplete="off"
        >
          <option value="">Selecciona la categoria</option>
          {
            categories.map(category => (
              <option key={category.category_name} value={category.id}>{category.category_name}</option>
            ))
          }

        </select>

        <label className="input-file" htmlFor="input-file">
          <img src={subir} alt="" />
          <p>SUBIR IMAGENES</p>
          <img src={subir} alt="" />
        </label>
        {image.length > 0 ? (
          <p className="create-product-p">{image.length} archivos subidos</p>
        ) : null}
        <input
          id="input-file"
          type="file"
          placeholder="seleccione las imagenes"
          name="image"
          onChange={handleImage}
          multiple
        />
        <button className="create-product-button" type="submit">
          CREAR PRODUCTO
        </button>
        <div className="create-product-errors">
          {errors.map((error) => (
            <p key={error}>*- {error}</p>
          ))}
        </div>
      </form>
      {loading ? <LoadingLarge /> : null}
      {success.state === true ? <Success message={success.message} /> : null}
      {notSuccess.state === true ? (
        <Error message={notSuccess.message} />
      ) : null}
    </div>
  );
};
