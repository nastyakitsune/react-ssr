import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "API-Key": process.env.API_KEY,
  },
});

export { apiInstance };
