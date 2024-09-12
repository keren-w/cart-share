const urlWithProxy = '/api/v1';
import axios from "axios";
import { IUser } from "../types/users.types";

export const login = async (username: string) => {
    const response = await axios.post(`${urlWithProxy}/users/login`, { username });
    return response.data;
};

export const getUserData = async (userId: string) : Promise<IUser> => {
    const response = await axios.get(`${urlWithProxy}/users/${userId}`);
    return response.data;
};

export const getUserCarts = async (userId: string) : Promise<IUser> => {
    const response = await axios.get(`${urlWithProxy}/users//${userId}/carts`);
    return response.data;
};