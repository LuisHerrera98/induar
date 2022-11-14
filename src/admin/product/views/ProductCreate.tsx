import { HeaderAdmin } from "../../layouts/header/HeaderAdmin"
import {CreateProductForm} from "../components/CreateProductForm"
import './stylesheets/ProductCreate.css'


const ProductCreate = () => {
   
  return (

    <>
      <HeaderAdmin />
      <h1 className="product-create-title">Crear producto</h1>
      <CreateProductForm />
      
    </>
  )
}

export default ProductCreate