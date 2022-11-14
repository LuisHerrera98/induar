export const useGetCategories = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/category/categories`)
    const data = response.json()
    return data;
}