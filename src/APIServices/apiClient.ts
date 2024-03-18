import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://eat-and-go-api.onrender.com",
});

export { CanceledError };
