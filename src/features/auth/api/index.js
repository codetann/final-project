import axios from "axios";

export const loginWithEmailPassword = async (email, password) => {
  return await (
    await axios.post("http://localhost:5000/auth/login", { email, password })
  ).data;
};

export const registerWithEmailPassword = async (data) => {
  return await (
    await axios.post("http://localhost:5000/auth/register", data)
  ).data;
};
