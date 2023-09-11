import axios from "axios";

export const servicenfApi = axios.create({
    baseURL: 'https://starfish-app-g8a8v.ondigitalocean.app'
})