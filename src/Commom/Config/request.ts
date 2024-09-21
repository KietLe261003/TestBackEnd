import axios from "axios";

export const requestServerLogin = axios.create({
    baseURL: "",
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})
export const requestServerBlog = axios.create({
    baseURL: "",
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})