import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/users";
import Alert from "../../components/commom/alert/Alert";
import {
  deleteCookie,
  setCookie,
} from "../../components/commom/function/function";
import { Author } from "../../enum/Enum";
import { UserModel } from "../../model/UserModel";

export const initialState = {
  loading: true,
  login: {
    username: "",
    role: "",
    avatar: "",
  },
};

export const loginUser = createAsyncThunk(
  "login/postlogin",
  async (user: UserModel) => {
    const res = await loginApi(user);
    return res.data;
  }
);

const Login = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state, action) => {
      deleteCookie(action.payload);
      state.login.username = "";
      state.login.avatar = "";
      state.login.role = "";
      state.loading = true;
    },
    login: (state, action) => {
      state.loading = false;
      state.login = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {})
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.login = action.payload.user;
        setCookie(Author.USER, JSON.stringify(action.payload.user), 1);
        Alert("success", "Đăng nhập thành công");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = true;
        Alert("error", "Sai tên đăng nhập hoặc mật khẩu");
      });
  },
});

export const getLoginStore = (state: any) => state.login;
export const { logout, login } = Login.actions;
export default Login.reducer;
