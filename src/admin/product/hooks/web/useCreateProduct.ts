import { CreateProductRequest } from '../../types/CreateProductRequest';


export const useCreateProduct = async (data: CreateProductRequest) => {
    const body: CreateProductRequest = new CreateProductRequest(data.name, data.price, data.category_id);
    try {
        const response = await fetch('http://localhost:3000/product/create', {
            method: 'POST',
            headers: {
                "content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(body),
        })
    } catch (error) {
        return error
    }
}