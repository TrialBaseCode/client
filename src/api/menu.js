import { axiosInstance } from "./index";

export const ListofItem = async () => {
  try {
    const response = await axiosInstance.get("http://localhost:5173/demo.json");
    return response.data;
  } catch (error) {
    return error.data;
  }
};
