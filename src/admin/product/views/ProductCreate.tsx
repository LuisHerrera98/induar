import { useState } from "react"
import { useCreateProduct } from "../hooks/web/useCreateProduct"

const ProductCreate = () => {

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category_id: ""
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const data = await useCreateProduct(product);
    } catch (error) {
      console.warn(error)
    }
  }

  const handleChange = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }



  return (
    <div>
      <h1>Crear producto</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre del producto</label>
        <br />
        <br />
        <input
          type="text"
          placeholder="ingrese el nombre"
          name="name"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="ingrese el precio"
          name="price"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="ingrese la categoria"
          name="category_id"
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Crear</button>
      </form>
    </div>
  )
}

export default ProductCreate