import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";

const initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    role: "",
  },
  accessToken: sessionStorage.getItem("accessToken") || "",
  refreshToken:
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("refreshToken="))
      ?.split("=")[1] || "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      const { user, accessToken, refreshToken } = payload;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      sessionStorage.setItem("accessToken", accessToken);
      document.cookie = `refreshToken=${refreshToken}; path=/;`;
    },
    logOut: (state) => {
      state.user = {
        id: "",
        username: "",
        email: "",
        role: "",
      };
      (state.accessToken = ""), (state.refreshToken = "");
      sessionStorage.removeItem("accessToken");
      document.cookie =
        "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      baseApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        const { access, refresh } = payload;
        state.accessToken = access;
        state.refresh = refresh;
        sessionStorage.setItem("accessToken", access);
        document.cookie = `refreshToken=${refresh}; path=/;`;
      }
    ).addMatcher(baseApi.endpoints.refreshToken.matchFulfilled, (state, {payload}) =>{
        const { access } = payload;
        state.accessToken = access;
        sessionStorage.setItem('accessToken', access);
    })
  },
});

export const {setCredential, logout} = authSlice.actions
export default authSlice.reducer
