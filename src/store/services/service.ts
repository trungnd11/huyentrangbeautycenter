import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findServicesByType, getServices } from "../../api/services";
import { OptionPage } from "../../model/component/PageModel";

export const initialState = {
  loading: true,
  filter: [],
  services: [],
};

export const fetServices = createAsyncThunk("services/fetServices", async (optionPage: OptionPage) => {
  const res = await getServices(optionPage);
  return res.data;
});

export const findServicesByServiceType = createAsyncThunk(
  "services/findType",
  async (props: { type: string, optionPage: OptionPage }) => {
    const { type, optionPage } = props;
    const res = await findServicesByType({ serviceType: type }, optionPage);
    return res.data;
  }
);

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
    }).addCase(fetServices.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(findServicesByServiceType.fulfilled, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    }).addCase(findServicesByServiceType.pending, (state, _action) => {
      state.loading = true;
    });
  }
});

export const { filterService } = services.actions;

export default services.reducer;

