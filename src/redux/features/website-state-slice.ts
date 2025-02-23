import { HomeWebViewType } from "@/models/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WebsiteState = HomeWebViewType.dashboard | HomeWebViewType.website;

const initialState: { currentView: WebsiteState } = {
  currentView: HomeWebViewType.website,
};

const websiteSlice = createSlice({
  name: "websiteType",
  initialState,
  reducers: {
    setWebsiteState: (state, action: PayloadAction<WebsiteState>) => {
      state.currentView = action.payload;
    },
  },
});

export const { setWebsiteState } = websiteSlice.actions;
export default websiteSlice.reducer;
