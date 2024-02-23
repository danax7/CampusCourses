import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface AuthState {
  token: string | null;
  email: string;
  isAuthenticated: boolean;
  roles: UserRolesResponse;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: Boolean(localStorage.getItem("token")),
  email: localStorage.getItem("email") ?? "",
  roles: {
    isTeacher: false,
    isStudent: false,
    isAdmin: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.email = localStorage.getItem("email") ?? "";
      localStorage.setItem("token", action.payload);
    },
    setRoles: (state, action: PayloadAction<AuthState["roles"]>) => {
      state.roles = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUserRoles = (state: RootState) => state.auth.roles;
export const selectUserEmail = (state: RootState) => state.auth.email;
export const { setToken, setRoles, clearToken } = authSlice.actions;
export default authSlice.reducer;
