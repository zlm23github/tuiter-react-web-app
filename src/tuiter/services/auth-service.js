import axios from "axios";

// const SERVER_API_URL = "http://localhost:4000/api";
//1
const SERVER_API_URL = process.env.REACT_APP_API_BASE;
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