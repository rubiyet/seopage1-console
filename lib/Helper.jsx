import axios from "axios";

//local url
export const BASE_URL = "http://127.0.0.1:8000/api"; // API URL

//axios instance for api calls with base url and headers
const todoApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'multipart/form-data',
  },
});

// Api calls for  get counter data from backend
export const getCounter = async () => {
  const response = await todoApi.get(`/counter`); //get data from api
  return response.data;
}

// Api calls for  post file to backend
export const postFile = async (files) => {
  const formData = new FormData(); //formData object
  files.forEach((file) => {
    formData.append("files[]", file);
  });
  const response = await todoApi.post(`/upload`, formData); //post formData object
  return response.data;
}