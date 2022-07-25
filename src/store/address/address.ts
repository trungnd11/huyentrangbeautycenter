import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../api/address";

export const initialState = {
  loading: true,
  address: []
}

export const fetAddress = createAsyncThunk("address/fetList", async () => {
  const res = await getAddress();
  return res.data;
})

const Address = createSlice({
  name: "address",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetAddress.fulfilled, (state, actione) => {
      state.loading = false;
      state.address = actione.payload;
    })
  }
});

export const {  } = Address.actions;

export default Address.reducer;