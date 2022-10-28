import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/IUser";

interface UserState {
  data: IUser | null;
}

const configSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  } as UserState,
  reducers: {
    setUserData: (state: UserState, action: PayloadAction<IUser>) => {
      state.data = action.payload;
    },
    logoutUser: (state: UserState) => {
      state.data = null;
    },
  },
});

export const { setUserData, logoutUser } = configSlice.actions;

export default configSlice.reducer;
