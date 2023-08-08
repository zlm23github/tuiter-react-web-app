import axios from "axios";

// const SERVER_API_URL = "http://localhost:4000/api";
// const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const SERVER_API_URL = "https://tuiter-node-server-app-hqru.onrender.com/api";
const USERS_URL = `${SERVER_API_URL}/users`;

const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
    console.log( { username, password });
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};
export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    console.log(respones);
    return response;
};
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};
export const register = async (user) => {
    const response = await api.post(`${USERS_URL}/register`, user);
    return response.data;
};