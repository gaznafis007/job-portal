import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";

const initialState = {
  user: {},
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
      const { user } = payload;
      state.user = user;
    },
    setLogin: (state, {payload}) =>{
      const {accessToken, refreshToken} = payload
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      sessionStorage.setItem("accessToken", accessToken);
      document.cookie = `refreshToken=${refreshToken}; path=/;`;
    },
    logOut: (state) => {
      state.user = {};
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
        const { accessToken, refreshToken } = payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        sessionStorage.setItem("accessToken", accessToken);
        document.cookie = `refreshToken=${refreshToken}; path=/;`;
      }
    ).addMatcher(baseApi.endpoints.refreshToken.matchFulfilled, (state, { payload }) =>{
        const { access } = payload;
        state.accessToken = access;
        sessionStorage.setItem('accessToken', access);
    })
  },
});

export const { setCredentials, logOut, setLogin} = authSlice.actions
export default authSlice.reducer
