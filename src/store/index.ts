import { configureStore } from "@reduxjs/toolkit";
import UserRole from "../slices/UserRole.slice";

const store = configureStore({
    reducer: {
        userRole: UserRole,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;