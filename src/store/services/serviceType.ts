import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getServiceType } from "../../api/serviceType";

export const initialState = {
  loading: true,
  serviceType: [],
};

export const fetServiceType = createAsyncThunk("serviceType/fetList", async () => {
  const res = await getServiceType();
  return res.data;
})

const ServiceType = createSlice({
  name: "serviceType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetServiceType.fulfilled, (state, action) => {
      state.loading = false;
      state.serviceType = action.payload;
    });
  }
});

export default ServiceType.reducer;