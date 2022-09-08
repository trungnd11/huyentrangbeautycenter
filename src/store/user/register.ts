import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { registerApi } from "../../api/users";
import Alert from "../../components/commom/alert/Alert";
import { auth, authFacebook, authGoogle } from "../../firebase/firebase";
import { UserModel } from "../../model/UserModel";

export const initialState = {
  loading: true,
  register: {
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    avatar: "",
  },
};

export const loginFacebook = createAsyncThunk("register/loginFacebook", async () => {
  const result = await signInWithPopup(auth, authFacebook);
  return result.user;
})

export const loginGoogle = createAsyncThunk("register/loginGoogle", async () => {
  const result = await signInWithPopup(auth, authGoogle);
  return result.user;
});

export const registerUser = createAsyncThunk("register/register", async (user: UserModel) => {
  const res = await registerApi(user);
  return res.data;
})

const Register = createSlice({
  name: "register",
  initialState,
  reducers: {
    updatePassword: (state, action) => {
      state.register = {
        ...state.register,
        password: action.payload,
      }
    },
    updateConfirmPass: (state, action) => {
      state.register = {
        ...state.register,
        passwordConfirm: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginGoogle.fulfilled, (state, action: any) => {
      state.loading = false;
      state.register = {
        ...state.register,
        email: action.payload.email,
        username: action.payload.email.replace("@gmail.com", ""),
        avatar: action.payload.photoURL,
      };
    });
    builder.addCase(loginFacebook.fulfilled, (state, action: any) => {
      state.loading = false;
      state.register = {
        ...state.register,
        email: action.payload.email,
        username: action.payload.displayName,
        avatar: action.payload.photoURL,
      };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.register = {
        ...state.register,
        email: ""
      }
      Alert("success", "Đăng ký thành công");
    }).addCase(registerUser.rejected, (state, action) => {
      Alert("error", "Tên đăng nhập hoặc email bị trùng");
    });
  }
});

export const getUserStore = (state: any) => state.register;
export const { updatePassword, updateConfirmPass } = Register.actions;
export default Register.reducer;