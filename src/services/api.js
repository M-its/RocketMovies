import axios from "axios"

export const api = axios.create({
    baseURL: "https://mits-rocketmovies-api.onrender.com",
})
