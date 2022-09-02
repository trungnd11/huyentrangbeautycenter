import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/users";
import { setLocalStorage } from "../../components/commom/function";
import { UserModel } from "../../model/UserModel";

export const initialState = {
  loading: true,
  login: {
    username: "",
    role: "",
    avatar: ""
  }
}


export const loginUser = createAsyncThunk("login/postlogin", async (user: UserModel) => {
  const res = await loginApi(user);
  return res.data;
})

const Login = createSlice({
  name: "login",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.login = action.payload.user;
      setLocalStorage({
        key: "user",
        data: action.payload.user
      });
      window.location.reload();
    });
  }
});

export const getLoginStore = (state: any) => state.login;
export default Login.reducer;