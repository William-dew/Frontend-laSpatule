import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://wdewailly.me/Backend-laSpatule/",
});

const baseUrlSuffix = "wp-json/wp/v2";
const jwtSuffix = "wp-json/jwt-auth/v1";
const customEndpointSuffix = "wp-json/laspatule/v1/note"

export {
  apiClient,
  baseUrlSuffix,
  jwtSuffix,
  customEndpointSuffix
};