import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// https://jsonplaceholder.typicode.com/users

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export interface UsersState {
  users: User[]
}

const initialState: UsersState = {
  users: []
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) =>
      void (state.users = action.payload)
  }
});

export const { setUsers } = usersSlice.actions;

export const users = (state: RootState) => state.users;

export default usersSlice;
