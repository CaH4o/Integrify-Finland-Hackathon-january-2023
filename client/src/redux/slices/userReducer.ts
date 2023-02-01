import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { TaskPersonData, UserState } from "../../utility/models";

const initialState: UserState = {
  avatar: "",
  name: "", id: 0,
  error: false,
  loading: false,
  authentication: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   logIn: function (state) {
    state.authentication = true
   },
    logOut: function (state: UserState) {
      state.authentication = false
      const avatar = "";
      const name = "";
      return { ...state, avatar, name };
    },
    updateUser: function (
      state: UserState,
      action: PayloadAction<TaskPersonData>
    ) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(login.pending, function (state: UserState) {
        const loading = true;
        return { ...state, loading };
      })
      .addCase(login.rejected, function (state: UserState) {
        const error = true;
        const loading = false;
        return { ...state, error, loading };
      })
      .addCase(
        login.fulfilled,
        function (state: UserState, action: PayloadAction<TaskPersonData>) {
          const loading = true;
          return { ...state, loading, ...action.payload };
        }
      );
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
export const {logIn,logOut, updateUser} = userSlice.actions;

const url = "https://localhost:8080";

export const login = createAsyncThunk(
  "user/login",
  async function (): Promise<TaskPersonData> {
    return await fetchData<TaskPersonData>(url);
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
