import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getServices } from "../../api/services";

export const initialState = {
  loading: true,
  filter: [],
  services: [],
};

export const fetServices = createAsyncThunk("services/fetServices", async () => {
  const res = await getServices();
  return res.data;
})

const services = createSlice({
  name: "services",
  initialState,
  reducers: {
    filterService: (state, action) => {
      state.filter = state.services.filter(
        (item: any) => item.serviceType.serviceType === action.payload
      );
    } 
  },
  extraReducers: (builder) => {
    builder.addCase(fetServices.fulfilled, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    })
  }
});

export const { filterService } = services.actions;

export default services.reducer;

