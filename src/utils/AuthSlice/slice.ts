import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface AuthState {
  token: string | null;
  email: string;
  isAuthenticated: boolean;
  role: UserRole;
}

const initialState: AuthState = {
    token: localStorage.getItem("token"),
    isAuthenticated: Boolean(localStorage.getItem("token")),
    email: localStorage.getItem("email") ?? "",
    role: "guest"
  };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.email = localStorage.getItem("email")!!;
      localStorage.setItem("token", action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.clear;
    //   localStorage.removeItem("token");
    },
  },
});

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUserRole = (state: RootState) => state.auth.role;
export const selectUserEmail = (state: RootState) => state.auth.email;
export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;