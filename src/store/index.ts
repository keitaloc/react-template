import { persistReducer, persistStore } from "redux-persist";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { authReducer } from "./authSlice";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

// State Type
export type RootState = ReturnType<typeof reducers>;

// Dispatch Type
export type AppDispatch = typeof store.dispatch;

// Inject Type RootState on useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Inject Type AppDispatch on useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
