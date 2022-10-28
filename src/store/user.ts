import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/IUser";

interface UserState {
  data: IUser;
}

const configSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
  } as UserState,
  reducers: {
    setUserData: (state: UserState, action: PayloadAction<IUser>) => {
      state.data = action.payload;
    },
  },
});

export const { setUserData } = configSlice.actions;

export default configSlice.reducer;
