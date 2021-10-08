import axios from "axios"

const apiClient = axios.create({
    baseURL:"https://wdewailly.me/Backend-laSpatule/wp-json/wp/v2/"
})

export {apiClient}