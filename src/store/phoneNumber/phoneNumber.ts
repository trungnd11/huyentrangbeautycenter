import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPhone } from "../../api/phoneNumber";

export const initialState = {
  loading: true,
  phoneNumber: [],
};

export const fetPhone = createAsyncThunk("phone/fetList", async () => {
  const res = await getPhone();
  return res.data;
});

const PhoneNumber = createSlice({
  name: "phoneNumber",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetPhone.fulfilled, (state, actione) => {
      state.loading = false;
      state.phoneNumber = actione.payload;
    });
  },
});

// export const {} = PhoneNumber.actions;

export default PhoneNumber.reducer;