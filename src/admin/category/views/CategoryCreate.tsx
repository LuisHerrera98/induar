import { useState } from "react"
import { useCreateCategory } from "../hooks/web/useCreateCategory"

const CategoryCreate = () => {

  const [category, setCategory] = useState({
    category_name: ""
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const data = await useCreateCategory(category);
      console.log(data);
    } catch (error) {
      console.warn(error)
    }
  }

  const handleChange = (e: any) => {
    setCategory({ ...category, [e.target.name]: e.target.value })
  }



  return (
    <div>
      <h1>Crear categoria</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre de la categoria</label>
        <br />
        <br />
        <input
          type="text"
          placeholder="ingrese el nombre"
          name="category_name"
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Crear</button>
      </form>
    </div>
  )
}

export default CategoryCreate