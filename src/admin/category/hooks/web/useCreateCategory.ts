import { CreateCategoryRequest } from '../../types/CreateCategoryRequest';


export const useCreateCategory = async (data: CreateCategoryRequest) => {
    const body: CreateCategoryRequest = new CreateCategoryRequest(data.category_name);
    try {
        const response = await fetch('http://localhost:3000/category/create', {
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