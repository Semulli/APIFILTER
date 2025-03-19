import axios from "axios";

const Api = axios.create({
  baseURL: "https://dummyjson.com/users",
});

export const getUsers = async () => {
  try {
    const response = await Api.get("/");
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log(error);
  }

  
};

export const getOneUser = async (userId) => {
  try {
    const response = await Api.get(`/${userId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log(error);
  }
};
