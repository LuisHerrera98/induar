export const useGetProducts = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/product/products`)
    const data = response.json()
    return data;
}