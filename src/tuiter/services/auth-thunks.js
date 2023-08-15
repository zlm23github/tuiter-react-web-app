import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
 "user/login", async (credentials) => {
   const user = await authService.login(credentials);
   return user;
 }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
    const response = await authService.profile();
    return response.data;
});

// export const profileThunk = createAsyncThunk(
//     "auth/profile", async () => {
//     return await authService.profile();
// });

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
    return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
});

export const registerThunk = createAsyncThunk(
    "auth/register", async(user) => {
        const newUser = await authService.register(user);
        return newUser;
    }
)


// export const registerThunk = createAsyncThunk(
//     "auth/register", async(credentials) => {
//         const newUser = await authService.register(credentials);
//         return newUser;
//     }
// )
   