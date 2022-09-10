import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/users";
import Alert, {
  RemoveAlert,
  SweetAlertComfirm,
} from "../../components/commom/alert/Alert";
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
      .addCase(loginUser.pending, (state, action) => {
        Alert("loading", "Vui lòng chờ...");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.user.role === "customer") {
          state.loading = false;
          state.login = action.payload.user;
          setCookie(Author.USER, JSON.stringify(action.payload.user), 1);
          RemoveAlert();
          Alert("success", `Chào mừng ${action.payload.user.username}`);
        } else if (action.payload.user.role === "admin") {
          SweetAlertComfirm(
            "Chuyển hướng",
            "Bạn đã đăng nhập tài khoản Admin chuyển đến trang dành cho admin",
            () =>
              (window.location.href =
                "https://huyentrangbeautycenteradmin.herokuapp.com/")
          );
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = true;
        RemoveAlert();
        Alert("error", "Sai tên đăng nhập hoặc mật khẩu");
      });
  },
});

export const getLoginStore = (state: any) => state.login;
export const { logout, login } = Login.actions;
export default Login.reducer;
