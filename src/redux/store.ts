import { configureStore } from "@reduxjs/toolkit";
import authDialogReducer from "./features/auth-dialog-slice";
import websiteReducer from "./features/website-state-slice";

export const store = configureStore({
    reducer: {
        dialog: authDialogReducer,
        website: websiteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;