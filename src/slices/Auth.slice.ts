import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserRole } from "../enums/UserRole";

interface IInitialState {
    userRole: UserRole | null;
}

const initialState: IInitialState = {
    userRole: null,
}

const Auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserRole: (state, action: PayloadAction<UserRole | null>) => {
            state.userRole = action.payload;
        },

        resetUserRole: (state) => {
            state.userRole = null;
        },
    }
});

export const { setUserRole, resetUserRole } = Auth.actions;
export default Auth.reducer;