import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserRoleTypes } from "../enums/UserRoleTypes";

interface IInitialState {
    userRole: UserRoleTypes | null;
}

const initialState: IInitialState = {
    userRole: null,
}

const UserRole = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserRole: (state, action: PayloadAction<UserRoleTypes | null>) => {
            state.userRole = action.payload;
        },

        resetUserRole: (state) => {
            state.userRole = null;
        },
    }
});

export const { setUserRole, resetUserRole } = UserRole.actions;
export default UserRole.reducer;