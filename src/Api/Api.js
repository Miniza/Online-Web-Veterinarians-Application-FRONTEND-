import axios from "axios";

export const client = axios.create({withCredentials:true, baseURL: 'http://localhost:5000/'});