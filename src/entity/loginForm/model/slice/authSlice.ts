import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthSliceShema, IUserShema } from "../types/AuthSliceShema";
import { loginByPassword } from "../services/LoginByPassword";

const initialState: IAuthSliceShema = {
  isLoading: false,
  isAuth: false,
  error: "",
  user: {} as IUserShema,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout(state, action) {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByPassword.pending, (state) => {
        state.error = "";
        state.isLoading = true;
      })
      .addCase(
        loginByPassword.fulfilled,
        (state, action: PayloadAction<IUserShema>) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isAuth = true;
          localStorage.setItem("token", action.payload.token);
        }
      )
      .addCase(loginByPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.user = {} as IUserShema;
        state.error = action.meta.requestStatus;
      });
  },
});

export const { logout } = AuthSlice.actions;
