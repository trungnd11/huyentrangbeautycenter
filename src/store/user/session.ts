import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSession } from "../../api/users";

export const initialState = {
  isAuthen: false,
  userId: ""
}

export const fetSesstion = createAsyncThunk("user/session", async () => {
  const res = await getSession();
  console.log(res)
  return res.data;
})

const SessionLogin = createSlice({
  name: "sessionLogin",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetSesstion.fulfilled, (state, action) => {
      if (action.payload.status === "success") {
        state.isAuthen = true;
        state.userId = action.payload.userId;
      }
      state.isAuthen = false;
      state.userId = "";
    })
  }
});

export default SessionLogin.reducer;