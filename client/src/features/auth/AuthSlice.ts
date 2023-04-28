import { createSlice } from "@reduxjs/toolkit";
import { IAuthContext } from "../../types";
import { HttpClientMethod } from "../../libs/axios";

const defaultIsAuthenticated = false;

const initialState: IAuthContext = {
  isAuthenticated: defaultIsAuthenticated,
  checkAuth: () => {},
  logoutClient: () => {},
};

export const authSlice = createSlice({
  name: "authenticated",
  initialState: initialState,
  reducers: {
    checkAuth: (state) => {
      const token = HttpClientMethod.getAccessToken();
      if (token) {
        state.isAuthenticated = true;
      } else {
        const success = HttpClientMethod.getRefreshToken();
        if (success) {
          state.isAuthenticated = true;
        }
        state.isAuthenticated = false;
      }
    },
  },
});
export const { checkAuth } = authSlice.actions;
export default authSlice.reducer;
