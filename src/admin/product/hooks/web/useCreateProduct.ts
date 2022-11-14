// import { CreateProductRequest } from '../../types/CreateProductRequest';


export const useCreateProduct = async (data: any, image: any) => {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("price", data.price)
    formData.append("category_id", data.category_id)
    for(let i = 0; i < image.length; i++){
        formData.append("image", image[i])
    }
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/product/create`, {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}