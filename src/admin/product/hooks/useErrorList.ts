export const useErrorList = (product: any, image: any) => {
  let errors: any = [];
  if (product.name === "") {
    errors.push("Falta el nombre");
  }
  if (product.price === 0) {
    errors.push("Falta el precio");
  }
  if (product.category_id === "") {
    errors.push("Falta la categoria");
  }
  if (image.length === 0) {
    errors.push("Sube al menos una imagen");
  }
  return errors
};
