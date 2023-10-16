import ApiConnect from "../ApiConfig";


export const get_all_vendors = async () => {
    try {
      const result = await ApiConnect(`vendors`, {
        method: "GET",
      });
      return result;
    } catch (error) {
      console.log(error);
      console.log(error + "failed get all vendors api");
  
      return error;
    }
  };

  export const get_vendor = async (vendorId) => {
    try {
      const result = await ApiConnect(`products/${vendorId}`, {
        method: "GET",
      });
      return result;
    } catch (error) {
      console.log(error);
      console.log(error + "failed get cendor api");
  
      return error;
    }
  };
  