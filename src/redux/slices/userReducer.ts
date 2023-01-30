import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { User, UserState } from "../../utility/models";

const initialState: UserState = {
  email: "",
  login: "",
  name: "",
  error: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: function (state: UserState) {
      const email = "";
      const login = "";
      const name = "";
      return { ...state, email, login, name };
    },
    updateUser: function (state: UserState, action: PayloadAction<User>) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(login.pending, function (state: UserState) {
        const loading: boolean = true;
        return { ...state, loading };
      })
      .addCase(login.rejected, function (state: UserState) {
        const error: boolean = true;
        const loading: boolean = false;
        return { ...state, error, loading };
      })
      .addCase(
        login.fulfilled,
        function (state: UserState, action: PayloadAction<User>) {
          const loading: boolean = true;
          return { ...state, loading, ...action.payload };
        }
      );
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
export const {} = userSlice.actions;


const url = "https://localhost:8080";

export const login = createAsyncThunk(
  "user/login",
  async function (): Promise<User> {
    return await fetchData<User>(url);
  }
);

async function fetchData<T>(url: string): Promise<T> {
  const response = await axios.get(url);

  if (response.status < 400) {
    return response.data;
  } else {
    throw new Error(response.status.toString() + "" + response.statusText);
  }
}
