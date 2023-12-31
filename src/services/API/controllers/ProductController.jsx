import ApiConnect from "../ApiConfig";


export const get_all_products = async () => {
    try {
      const result = await ApiConnect(`products`, {
        method: "GET",
      });
      return result;
    } catch (error) {
      console.log(error);
      console.log(error + "failed get all products api");
  
      return error;
    }
  };

  export const get_product = async (productId) => {
    try {
      const result = await ApiConnect(`products/${productId}`, {
        method: "GET",
      });
      return result;
    } catch (error) {
      console.log(error);
      console.log(error + "failed get all products api");
  
      return error;
    }
  };
  