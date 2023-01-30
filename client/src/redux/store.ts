import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import columnReducer from "./slices/columnReducer";
import taskReducer from "./slices/taskReducer";
import userReducer from "./slices/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    column: columnReducer,
    task: taskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
