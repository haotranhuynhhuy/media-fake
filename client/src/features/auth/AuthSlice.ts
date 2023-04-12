import { createSlice } from "@reduxjs/toolkit";
import { IAuthContext } from "../../types";

const defaultIsAuthenticated = false;

const initialState: IAuthContext = {
  isAuthenticated: defaultIsAuthenticated,
  setIsAuthenticated: () => {},
  checkAuth: () => Promise.resolve(),
  logoutClient: () => {},
};

export const authSlice = createSlice({
  name: "authenticated",
  initialState: initialState,
  reducers: {
    a: () => {},
  },
});
export const { a } = authSlice.actions;
export default authSlice.reducer;
