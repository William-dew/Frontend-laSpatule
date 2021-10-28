import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://wdewailly.me/Backend-laSpatule/",
});

const baseUrlSuffix = "wp-json/wp/v2";
const jwtSuffix = "wp-json/jwt-auth/v1";

export { apiClient, baseUrlSuffix, jwtSuffix };
