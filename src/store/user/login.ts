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
  isAuthorization: false,
  username: "",
  avatar: "",
  roles: [],
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
      // const token = getCookie(Author.REFRESH_TOKEN);
      // if (token) {
      //   logoutApi({ refreshToken: token }).then(() => {
      //     console.log("Deleted");
      //   });
      // }
      state.isAuthorization = false;
      state.username = "";
      state.avatar = "";
      state.roles = [];
      deleteCookie(Author.USER);
      deleteCookie(Author.TOKEN);
      deleteCookie(Author.REFRESH_TOKEN);
    },
    login: (state, action) => {
      state.isAuthorization = true;
      state.username = action.payload.username;
      state.avatar = action.payload.avatar;
      state.roles = action.payload.roles;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        Alert("loading", "Vui lòng chờ...");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        RemoveAlert();
        action.payload.roles.forEach((role: string) => {
          if (role === "ROLE_ADMIN") {
            SweetAlertComfirm(
              "Chuyển hướng",
              "Vui lòng đăng nhập trang quản trị, chuyển đến ngay..",
              () =>
                (window.location.href =
                  "https://huyentrangdashboard.vercel.app/home")
            );
          }
          else {
            state.isAuthorization = true;
            state.username = action.payload.username;
            state.avatar = action.payload.avatar;
            state.roles = action.payload.roles;
            setCookie(
              Author.USER,
              JSON.stringify({
                username: action.payload.username,
                avatar: action.payload.avatar,
                roles: action.payload.roles,
              }),
              1
            );
            setCookie(Author.TOKEN, action.payload.accessToken, 1);
            setCookie(Author.REFRESH_TOKEN, action.payload.refreshToken, 1);
            Alert("success", `Chào mừng ${action.payload.username}`);
          }
        });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthorization = false;
        RemoveAlert();
        Alert("error", "Sai tên đăng nhập hoặc mật khẩu");
      });
  },
});

export const getLoginStore = (state: any) => state.login;
export const { logout, login } = Login.actions;
export default Login.reducer;
