import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjE3MGEwN2U5Y2ViMTU2MGViN2IwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTczNjE3NSwiZXhwIjoxNjM5OTk1Mzc1fQ.N7-gecUch6bsssptOXUVI9wY7Ojv572kg38-H0Aes9s";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
