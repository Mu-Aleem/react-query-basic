import axios from "axios";

const BaseUrl = axios.create({
  baseURL: " http://localhost:8000/",
});

export const getusers = async () => {
  const response = await BaseUrl.get("/users");
  return response.data;
};
export const getSingleuser = async (id) => {
  const response = await BaseUrl.get(`/users/${id}`);
  return response.data;
};
export const createusers = async (data) => {
  return await BaseUrl.post("/users", data);
};

export const updateusers = async (data) => {
  return await BaseUrl.patch(`/users/${data.id}`, data);
};
export const deleteusers = async (id) => {
  return await BaseUrl.delete(`/users/${id}`);
};

export default BaseUrl;
